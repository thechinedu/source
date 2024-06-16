import { FC } from "react";
import ReactMarkdown from "react-markdown";
import {
  PrismAsyncLight,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const SyntaxHighlighter =
  PrismAsyncLight as unknown as FC<SyntaxHighlighterProps>;

type MarkdownProps = {
  content: string;
};

const Markdown: FC<MarkdownProps> = ({ content }) => (
  <ReactMarkdown
    components={{
      // https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <SyntaxHighlighter
            // TODO: fix issue leading to usage of any
            style={vscDarkPlus as any}
            language={match[1]}
            PreTag="div"
            showLineNumbers
            wrapLines
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
    }}
  >
    {content}
  </ReactMarkdown>
);

export default Markdown;
