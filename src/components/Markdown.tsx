import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import type { Element } from 'hast'

interface MarkdownProps {
  readonly children: string
}

export default function Markdown({ children }: MarkdownProps) {
  return (
    <article className="prose mx-auto max-w-3xl text-base leading-7 text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:mx-auto">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ children, href }) => {
            return <Link href={{ pathname: href }}>{children}</Link>
          },
          p: (paragraph) => {
            if (paragraph.node && paragraph.node.children) {
              const child = paragraph.node.children[0] as Element
              if (child.tagName === 'img') {
                const width = child.properties.width
                  ? child.properties.width
                  : '768'
                const height = child.properties.height
                  ? child.properties.height
                  : '432'
                return (
                  <figure className="postImgWrapper mt-14">
                    <Image
                      src={child.properties.src as string}
                      width={width as number}
                      height={height as number}
                      className="postImg aspect-video rounded-xl bg-gray-50 object-cover"
                      alt={child.properties.alt as string}
                    />
                    {child.properties.alt && (
                      <figcaption
                        className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500"
                        aria-label={child.properties.alt as string}
                      >
                        {child.properties.alt}
                      </figcaption>
                    )}
                  </figure>
                )
              }
            }
            return <p>{paragraph.children}</p>
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  )
}
