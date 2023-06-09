import './globals.css';
import { Exo } from 'next/font/google';
import { Changa } from 'next/font/google';

const exo = Exo({ subsets: ['latin'] });
const changa = Changa({ subsets: ['latin'] });


export const metadata = {
  title: 'My Portfolio',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={exo.className}>{children}</body>
    </html>
  );
}
