import NavBar from '@/app/components/NavBar';
import AuthContext from '@/app/context/AuthContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenTable',
  description: 'OpenTable Restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-100 min-h-screen w-screen">
          <AuthContext>
            <main className="max-w-screen-2xl m-auto bg-white">
              <NavBar />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
