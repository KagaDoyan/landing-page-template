
import type { Viewport } from 'next';
import Navbar from '@/components/layouts/navbar';
import Footer from '@/components/layouts/footer';
import React from 'react';
import QuickContact from '@/components/layouts/quickcontact';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

import { Noto_Sans_Thai } from 'next/font/google';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'], // Define the weights you want
});


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body style={{ margin: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className={notoSansThai.className}>
        <Navbar />
        <QuickContact />
        <main style={{ flex: 1 }}>{children}</main> {/* Ensures the main content takes available space */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
