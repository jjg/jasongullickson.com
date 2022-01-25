import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

export default function About(){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} - About</title>
      </Head>

      <h2>About</h2>
      <p>This jasongullickson.com is the latest incarnation of my personal repository of published work.  I&apos;m currently in the process of building the site and learning <a href="https://nextjs.org/">Next.js</a> in the process.</p>
      <p>What you see here is the first phase of importing content from the previous <a href="https://github.com/jjs/preposter.us">preposter.us</a>-based version of my blog.  I will slowly be expanding to include posts and other documents from historical versions of jasongullickson.com.</p>
      <p>In addition, I will be adding experimental features to the site in an effort to expand my knowledge and experience with both Next.js and <a href="https://vercel.com/">Vercel</a> (the current hosting platform for this website).</p>

      <h2>Contact</h2>
      <ul>
        <li><a href="https://twitter.com/jasonbot2000">@jasonbot2000</a> on Twitter</li>
        <li><a href="https://github.com/jjg">jjg</a> on Github</li>
        <li><a href="https://hackaday.io/jjg">jjg</a> on Hackaday.io</li>
        <li><a href="https://www.instagram.com/gullicksonlaboratories/">gullicksonlaboratories</a> on Instagram</li>
        <li><a href="https://www.last.fm/user/jjgullickson">jjgullickson</a> on Last.fm</li>
      </ul>

      <h2>
      <Link href="/">
        <a>Back to the posts</a>
      </Link>
      </h2>

    </Layout>
  )
}
