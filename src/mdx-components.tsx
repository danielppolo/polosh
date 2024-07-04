import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    strong: ({ children, ...otherProps }) => (
      <strong {...otherProps} className="font-bold">{`«${children}»`}</strong>
    ),
    em: ({ children, ...otherProps }) => (
      <span {...otherProps} className="">
        {`{ ${children} }`}
      </span>
    ),
    blockquote: ({ children, ...otherProps }) => (
      <blockquote
        {...otherProps}
        className="border border-dark rounded-md py-2 px-3 my-4 text-sm"
      >
        {children}
      </blockquote>
    ),
    a: ({ children, ...otherProps }) => (
      <a {...otherProps} className="underline">
        {children}
        &nbsp;&nbsp;↗
      </a>
    ),
    p: ({ children, ...otherProps }) => (
      <p {...otherProps} className="my-4">
        {children}
      </p>
    ),
    ul: ({ children, ...otherProps }) => (
      <ul {...otherProps} className="">
        {children}
      </ul>
    ),
    ol: ({ children, ...otherProps }) => (
      <ol {...otherProps} className="">
        {children}
      </ol>
    ),
    li: ({ children, ...otherProps }) => (
      <li {...otherProps} className="flex items-center">
        → {children}
      </li>
    ),
    pre: ({ children, ...otherProps }) => (
      <pre {...otherProps} className="">
        {children}
      </pre>
    ),
    code: ({ children, ...otherProps }) => (
      <code {...otherProps} className="">
        {children}
      </code>
    ),
    h1: ({ children, ...otherProps }) => (
      <h1 {...otherProps} className="text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children, ...otherProps }) => (
      <h2 {...otherProps} className="text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children, ...otherProps }) => (
      <h3 {...otherProps} className="text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children, ...otherProps }) => (
      <h4 {...otherProps} className="text-xl">
        {children}
      </h4>
    ),
    h5: ({ children, ...otherProps }) => (
      <h5 {...otherProps} className="text-lg">
        {children}
      </h5>
    ),
    h6: ({ children, ...otherProps }) => (
      <h6 {...otherProps} className="uppercase">
        {children}
      </h6>
    ),
    // hr: ({ children, ...otherProps }) => <Separator />,
    ...components,
  };
}
