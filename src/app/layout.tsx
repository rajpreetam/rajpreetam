import '../styles/globals.css';
import Layout from '@/components/hocs/Layout';

export const metadata = {
  title: 'Preetam Raj',
  description: 'Preetam Raj',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
};