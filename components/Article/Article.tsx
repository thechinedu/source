import styles from "./Article.module.css";

import { format } from "@utils/date";
import Head from "next/head";
import { FC } from "react";
import Markdown from "react-markdown";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export type PostData = {
  title: string;
  date: string;
  content: string;
};

export type ArticleProps = {
  post: PostData;
};

const Article: FC<ArticleProps> = ({ post: { title, date, content } }) => {
  return (
    <>
      <Head>
        <title>{title} | Chinedu Daniel - Full Stack Developer</title>
      </Head>
      <article className={styles.article}>
        <header>
          <h1>{title}</h1>
          <span>{format(date)}</span>
        </header>

        <main>
          <Markdown
            components={{
              // https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
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
          </Markdown>
        </main>
      </article>
    </>
  );
};

export default Article;
