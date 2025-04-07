let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // Enable standalone output mode for Docker
  output: 'standalone',
  // async rewrites() {
  //   const destination = process.env.NEXT_PUBLIC_PACMAN_URL;
  //   return {
  //     beforeFiles: [
  //       // These rewrites are checked after headers/redirects
  //       // and before all files including _next/public files which
  //       // allows overriding page files
  //       {
  //         source: '/pacman-game',
  //         destination: process.env.NEXT_PUBLIC_PACMAN_URL,
  //       },
  //     ],
  //     afterFiles: [
  //       // These rewrites are checked after pages/public files
  //       // are checked but before dynamic routes
  //       {
  //         source: '/pacman-game',
  //         destination: process.env.NEXT_PUBLIC_PACMAN_URL,
  //       },
  //     ],
  //     fallback: [
  //       // These rewrites are checked after both pages/public files
  //       // and dynamic routes are checked
  //       {
  //         source: '/:path*',
  //         destination: `${destination}/:path*`,
  //       },
  //     ],
  //   }
  // },
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
