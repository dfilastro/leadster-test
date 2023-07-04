import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Leadster Test',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <link rel='icon' href='/favicon.ico' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700;1,800&display=swap'
          rel='stylesheet'
        />
      </head>

      <body className={inter.className}>
        {/* <Header /> */}

        {children}
      </body>
    </html>
  );
}
