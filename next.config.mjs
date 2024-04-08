/** @type {import('next').NextConfig} */
import withMDX from "@next/mdx";
// const withMDX = import('@next/mdx')()

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

// const withMdxFunc = withMDX(nextConfig);
export default withMDX(nextConfig)();



















// export { withMdxFunc };

// module.exports = withMDX(nextConfig);

// const withMDX = require('@next/mdx')()

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }

// module.exports = withMDX(nextConfig)
