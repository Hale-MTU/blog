import Link from 'next/link'
import { PostCard } from '../components/post-card'
import { appInfo, apps } from '../lib/apps'
import { getPosts, getTagCounts } from '../lib/posts'

// The blog's opening: what it is, and a way into each app's section.
function Intro() {
  return (
    <div className="not-prose hale-intro">
      <p className="x:dark:text-gray-400 x:text-gray-600">
        News and write-ups from Hale MTÜ about OpenVitals, OpenWatch and OpenBridge.
      </p>
      <div className="hale-apps">
        {apps.map(app => (
          <Link key={app} href={`/${app}/`} className="hale-app-link-card">
            <img src={appInfo[app].mark} alt="" width="40" height="40" />
            <span>{appInfo[app].name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default async function PostsPage() {
  const posts = await getPosts()
  const tagCounts = await getTagCounts()

  // Pagefind refuses to build an empty index, so while there is no post this line,
  // left outside the ignored list, is the one thing it indexes.
  if (posts.length === 0) {
    return (
      <>
        <h1>Posts</h1>
        <Intro />
        <p>No posts yet.</p>
      </>
    )
  }

  return (
    <div data-pagefind-ignore="all">
      <h1>Posts</h1>
      <Intro />
      {tagCounts.length > 0 && (
        <div className="not-prose openvitals-tags">
          {tagCounts.map(([tag, count]) => (
            <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
              {tag} ({count})
            </Link>
          ))}
        </div>
      )}
      {posts.map(post => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  )
}
