import styles from "./Article.module.css";

import Head from "next/head";
import { FC } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type ArticleProps = {
  post: any; // TODO: add proper type information
};

const Article: FC<ArticleProps> = ({ post }: any) => {
  return (
    <>
      <Head>
        <title>{post.title} | Chinedu Daniel - Full Stack Developer</title>
      </Head>
      <article className={styles.article}>
        <header>
          <h1>{post.title}</h1>
          <span>{post.date}</span>
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
            {post.content}
          </Markdown>
        </main>
      </article>
    </>
  );
};

export default Article;
