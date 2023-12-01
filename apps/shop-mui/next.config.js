/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: "[local]",
      importMap: {
        "@mui/system": {
          styled: {
            canonicalImport: ["@emotion/styled", "default"],
            styledBaseImport: ["@mui/system", "styled"],
          },
        },
        "@mui/material/styles": {
          styled: {
            canonicalImport: ["@emotion/styled", "default"],
            styledBaseImport: ["@mui/material/styles", "styled"],
          },
        },
      },
    },
  },
  transpilePackages: ["@repo/ui"],
};
