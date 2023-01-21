import React from 'react'
import { MDXProvider as Provider } from '@mdx-js/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia'
import SlidePage from '@/components/presentation/SlidePage'
import Cover from '@/components/presentation/Cover'
import SpeakerNotes from '@/components/presentation/SpeakerNotes'
import Step from '@/components/presentation/Step'
import Steps from '@/components/presentation/Steps'
import All from '@/components/slides'
import { motion } from 'framer-motion'

const mdComponents = {
  h1: (props) => <h1 {...props} />,
  pre: (props) => props.children,
  code: (props) => {
    const { className } = props
    const language = className.replace('language-', '')
    return <SyntaxHighlighter className={className} language={language} style={okaidia} {...props} />
  },
  blockquote: (props) => (
    <div className="container mx-auto max-w-screen-lg">
      <blockquote {...props} />
    </div>
  ),
  Cover,
  SlidePage,
  SpeakerNotes,
  Step,
  Steps,
  motion,
  ...All,
}

export const MDXProvider = ({ children }) => (
  <div className="bg-gradient-app">
    <Provider components={mdComponents}>{children}</Provider>
  </div>
)

export default MDXProvider
