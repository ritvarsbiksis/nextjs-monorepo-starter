'use client'

import { useGetPosts } from '../../hooks/get-posts'

export const PostsList = () => {
  const { data, isLoading } = useGetPosts(12)

  if (isLoading || !Array.isArray(data)) return <div>Loading</div>

  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  )
}
