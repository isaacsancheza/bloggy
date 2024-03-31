import type { ForwardedRef } from 'react'
import { MDXEditor } from '@mdxeditor/editor'
import type { MDXEditorProps, MDXEditorMethods } from '@mdxeditor/editor'
import {
  linkPlugin,
  imagePlugin,
  listsPlugin,
  tablePlugin,
  quotePlugin,
  toolbarPlugin,
  headingsPlugin,
  diffSourcePlugin,
  linkDialogPlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
} from '@mdxeditor/editor'
import {
  UndoRedo,
  Separator,
  CreateLink,
  InsertImage,
  ListsToggle,
  InsertTable,
  BlockTypeSelect,
  InsertThematicBreak,
  DiffSourceToggleWrapper,
  BoldItalicUnderlineToggles,
} from '@mdxeditor/editor'

export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        linkPlugin(),
        imagePlugin(),
        tablePlugin(),
        listsPlugin(),
        quotePlugin(),
        headingsPlugin(),
        diffSourcePlugin(),
        linkDialogPlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <DiffSourceToggleWrapper options={['rich-text', 'source']}>
              <UndoRedo />
              <Separator />
              <BoldItalicUnderlineToggles />
              <Separator />
              <ListsToggle />
              <Separator />
              <BlockTypeSelect />
              <Separator />
              <CreateLink />
              <InsertImage />
              <Separator />
              <InsertTable />
              <InsertThematicBreak />
            </DiffSourceToggleWrapper>
          ),
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  )
}
