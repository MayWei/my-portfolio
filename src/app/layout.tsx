import { ClientLayout } from '@/lib/client-layout';
import StyledComponentsRegistry from '@/lib/registry';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Linda Wei',
  description:
    'Linda Wei is a Senior Frontend developer who build user-first, captivating applications and provide seemless user experience',
  keywords: 'Linda Wei, Front-end Engineer, Quanlity nerd, Typescript, Reactjs, React Native',
};

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
