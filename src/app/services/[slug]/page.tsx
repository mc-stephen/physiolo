import { MDXRemote } from 'next-mdx-remote/rsc'
 
export default async function RemoteMdxPage({ params }: { params: { slug: string } }) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const res = await fetch('https://...')
  // const markdown = await res.text()
  // return <MDXRemote source={markdown} />
  return <div>hi</div>
}