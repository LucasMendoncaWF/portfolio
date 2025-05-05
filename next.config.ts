import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  experimental: {
    middlewarePrefetch: 'strict',
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
