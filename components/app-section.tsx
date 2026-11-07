import Link from 'next/link'
import { appInfo, type App } from '../lib/apps'
import { getPosts, postApp } from '../lib/posts'
import { PostCard } from './post-card'

// One app's section: its mark and one line on what it is, then its posts. An app
// with no post yet shows a placeholder, so its address works from day one.
export async function AppSection({ app }: { app: App }) {
  const info = appInfo[app]
  const posts = (await getPosts()).filter(post => postApp(post) === app)

  return (
    <div data-pagefind-ignore="all">
      <div className="hale-section-head not-prose">
        <img src={info.mark} alt="" width="72" height="72" />
        <div>
          <h1>{info.name}</h1>
          <p className="x:dark:text-gray-400 x:text-gray-600">
            {info.blurb} <a href={info.site}>About {info.name}</a>
          </p>
        </div>
      </div>
      {posts.length === 0 ? (
        <p className="hale-empty">
          No {info.name} posts yet. New ones will appear here, on the{' '}
          <Link href="/">home page</Link> and in the <a href="/feed.xml">RSS feed</a>.
        </p>
      ) : (
        posts.map(post => <PostCard key={post.route} post={post} />)
      )}
    </div>
  )
}

export function appSectionMetadata(app: App) {
  const info = appInfo[app]
  return { title: info.name, description: `${info.name} posts on the Hale blog. ${info.blurb}` }
}
