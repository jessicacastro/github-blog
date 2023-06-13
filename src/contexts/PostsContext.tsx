import { apiService } from '@/services/api'
import { ReactNode, useEffect, useState } from 'react'
import { createContext } from "use-context-selector"


// interface Post {
//   id: number
//   url: string
//   title: string
//   created_at: string
//   body: string
//   comments: number
//   owner: {
//     login: string
//   }
// }


export interface Item {
  id: number
  title: string
  created_at: string
  body: string
  number: number
}

interface PostList {
  total_count: number
  items: Item[]

}

interface PostListContextType {
  postList?: PostList
}

interface PostListProvider {
  children: ReactNode
}

export const PostListContext = createContext({} as PostListContextType)

export const PostListProvider = ({ children }: PostListProvider) => {
  const [postList, setPostList] = useState<PostList>()

  const loadPostList = async (query: string = 'repo:jessicacastro/github-blog') => {
    const { data } = await apiService.get('/search/issues', {
      params: {
        q: query
      }
    })

    setPostList(data);
  }

  useEffect(() => {
    loadPostList()
  }, [])

  return (
    <PostListContext.Provider value={{ postList }}>
      {children}
    </PostListContext.Provider>
  )
}