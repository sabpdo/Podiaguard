/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Exclude these packages from server-side bundling (they're browser-only)
  serverComponentsExternalPackages: [
    '@mediapipe/pose',
    '@tensorflow-models/pose-detection',
    '@tensorflow/tfjs',
    '@tensorflow/tfjs-core',
    '@tensorflow/tfjs-converter',
    '@tensorflow/tfjs-backend-webgl',
    '@tensorflow/tfjs-backend-webgpu',
    '@tensorflow/tfjs-backend-wasm',
  ],
  // Empty turbopack config - use --webpack flag to use webpack config instead
  turbopack: {},
  webpack: (config, { isServer }) => {
    // Exclude @mediapipe packages from SSR bundling
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push(
        '@mediapipe/pose',
        '@tensorflow-models/pose-detection',
        '@tensorflow/tfjs',
        '@tensorflow/tfjs-core',
        '@tensorflow/tfjs-converter',
        '@tensorflow/tfjs-backend-webgl',
        '@tensorflow/tfjs-backend-webgpu',
        '@tensorflow/tfjs-backend-wasm'
      )
    }
    
    // Handle .wasm files for TensorFlow.js
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    }
    
    return config
  },
}

export default nextConfig