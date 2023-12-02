'use client'
import { useMemo, useRef } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import type Entity from '@ant-design/cssinjs/es/Cache'
import type { ReactNode } from 'react'

export default function StyledComponentsRegistry({ children }: { children: ReactNode }) {
  const cache = useMemo<Entity>(() => createCache(), [])
  const isServerInserted = useRef<boolean>(false)

  useServerInsertedHTML(() => {
    // 避免css重复插入
    if (isServerInserted.current) {
      return
    }

    isServerInserted.current = true

    return <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  })

  return <StyleProvider cache={cache}>{children}</StyleProvider>
}
