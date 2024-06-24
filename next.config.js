const prefix = process.env.NODE_ENV === 'production' ? 'https://prussian-1to9.github.io/prussian-1to9.github.io' : '';

const nextConfig = {
    output: 'export',
    assetPrefix: prefix,
}