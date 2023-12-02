const dateformat = require('dateformat');
const nextBuildId = require('next-build-id');
const fs = require('fs');
const BannerPlugin = require('./banner');

const isProd = process.env.NODE_ENV === 'production';
const isAnalyzer = process.env.REACT_APP_BUNDLE_VISUALIZE === '1' && isProd;
const isPwa = process.env.REACT_APP_PWA_ENABLE === '1';

module.exports = ({ pkg = {}, dir = __dirname, timeStamp = 0, ...rest }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    basePath: '',
    compress: true,
    distDir: '.next',
    generateEtags: false,
    pageExtensions: ['tsx', 'ts'],
    poweredByHeader: false,
    reactStrictMode: isProd,
    swcMinify: true,
    trailingSlash: false,
    experimental: {
      esmExternals: 'loose',
    },
    compiler: {
      reactRemoveProperties: isProd,
      removeConsole: false,
      emotion: {
        sourceMap: !isProd,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        importMap: {
          '@mui/system': {
            styled: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@mui/system', 'styled'],
            },
          },
          '@mui/material/styles': {
            styled: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@mui/material/styles', 'styled'],
            },
          },
        },
      },
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    transpilePackages: ['lodash-es', 'nanoid'],
    ...rest,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: isProd,
    },
    generateBuildId: async () => {
      const commitId = await nextBuildId({ dir });
      const trunk = commitId.substring(0, 16);
      return `${trunk}_${timeStamp.toString()}`;
    },
    webpack: (config, { buildId, isServer, webpack }) => {
      // Write buildId to the version controll file
      if (isPwa) {
        fs.writeFileSync(
          'public/version.json',
          JSON.stringify({
            version: buildId,
            timeStamp,
          })
        );
      }

      // Js trunk time hash
      if (isProd) {
        if (config.output.filename.startsWith('static')) {
          if (config.output.filename === 'static/chunks/[name]-[contenthash].js') {
            config.output.filename = `static/chunks/[name]-[contenthash]-${timeStamp}.js`;
          }

          if (config.output.chunkFilename === 'static/chunks/[name].[contenthash].js') {
            config.output.chunkFilename = `static/chunks/[name]-[contenthash]-${timeStamp}.js`;
          }
        }

        // Polyfill contorll version
        config.plugins.map((plugin) => {
          if (plugin.constructor.name === 'CopyFilePlugin') {
            plugin.name = `static/chunks/polyfills-[hash]-${timeStamp}.js`;
          }

          if (plugin.constructor.name === 'NextMiniCssExtractPlugin') {
            plugin.options = {
              ...plugin.options,
              filename: `static/css/[contenthash]-${timeStamp}.css`,
              chunkFilename: `static/css/[contenthash]-${timeStamp}.css`,
            };
          }

          return plugin;
        });
      }

      // Client webpack conifg
      if (!isServer) {
        // Attention: It must be placed after terserplugin, otherwise the generated annotation description will be cleared by terserplugin or other compression plug-ins
        if (isProd && pkg) {
          // Automatic injection of copyright annotation information
          config.optimization.minimizer.push(
            new BannerPlugin({
              banner: `/*!\n *  @name: ${pkg.name} \n *  @author: ${
                pkg.author
              } \n *  @date: ${dateformat(
                new Date(),
                'UTC:dddd, mmmm dS, yyyy, h:MM:ss TT'
              )} \n *  @version: ${pkg.version} \n *  @license: ${pkg.license} \n *  @copyright: ${
                pkg.copyright
              } \n */\n`,
            })
          );
        }
      }

      // Important: return the modified config
      return config;
    },
  };

  const plugins = [];

  if (isAnalyzer)
    plugins.push(
      require('@next/bundle-analyzer')({
        enabled: true,
      })
    );

  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
