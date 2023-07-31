import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'

import type { Post } from '../types/data'

export const fetchPosts = async ({ queryKey }: QueryFunctionContext<string[]>) => {
  const [, limit] = queryKey

  const parsed = await axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .then(({ data }) => data)

  return parsed.filter(x => Number(x.id) <= Number(limit || 10))
}
