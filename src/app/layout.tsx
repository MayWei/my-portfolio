'use client';

import { ClientLayout } from '@/lib/client-layout';
import StyledComponentsRegistry from '@/lib/registry';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
