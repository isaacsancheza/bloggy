'use client'

import { useRef } from 'react'
import Editor from '@/components/Editor'
import type { MDXEditorMethods } from '@mdxeditor/editor'


export default function Page() {
  const ref = useRef<MDXEditorMethods>(null)
  return (
    <Editor markdown='' ref={ref} />
  )
}
