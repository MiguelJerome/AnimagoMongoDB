/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  node: {
    child_process: 'empty',
    // fs: "empty", // if unable to resolve "fs"
    path: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  externals: {
    sharp: 'commonjs sharp',
  },
  webpack: (config, { isServer }) => {
    // custom webpack configurations
    if (isServer) {
      // server-side webpack configurations
    } else {
      // client-side webpack configurations
    }
    return config;
  },
};

export default nextConfig;
