import { gql } from '../../lib/gql'
import { Post } from '../../types/payload-types'

interface Posts {
  Posts: {
    docs: Partial<Post>[]
  }
}

export default async function PostsPage() {
  const posts = await gql<Posts>(`
  query {
    Posts {
      docs {
        id
        title
      }
    }
  }`)

  if (posts) {
    console.log('posts :: ', posts.Posts.docs)
  }

  return (
    <div>
      <h1>Posts</h1>
      {posts && posts.Posts.docs.map(({ id, title }) => <p key={id}>{title}</p>)}
    </div>
  )
}
