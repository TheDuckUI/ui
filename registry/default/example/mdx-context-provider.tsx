import React from 'react'
import { CommentType, TaggedUserType } from '../ui'

interface MDXContextType {
  //MENTION
  mention: TaggedUserType | null
  setMention: React.Dispatch<React.SetStateAction<TaggedUserType | null>>

  //EDITCONTENT
  editContent: CommentType | null
  setEditContent: React.Dispatch<React.SetStateAction<CommentType | null>>

  // MDX CONTENT
  mdxContent: string
  setMdxContent: React.Dispatch<React.SetStateAction<string>>
}

export const MDXContext = React.createContext<MDXContextType>({} as MDXContextType)

const MDXProvider = ({ children }: React.PropsWithChildren) => {
  const [mention, setMention] = React.useState<TaggedUserType | null>(null)
  const [editContent, setEditContent] = React.useState<CommentType | null>(null)
  const [mdxContent, setMdxContent] = React.useState<string>('')

  return (
    <MDXContext.Provider
      value={{
        mention,
        setMention,
        editContent,
        setEditContent,
        mdxContent,
        setMdxContent,
      }}
    >
      {children}
    </MDXContext.Provider>
  )
}

export type CommentsContextType = {
  // COMMENTS
  comments: CommentType[]
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
}

export const CommentsContext = React.createContext<CommentsContextType>({} as CommentsContextType)

const CommentsProvider = ({ children }: React.PropsWithChildren) => {
  const [comments, setComments] = React.useState<CommentType[]>([])

  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  )
}

export { MDXProvider, CommentsProvider }
