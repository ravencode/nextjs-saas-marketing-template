import '../styles/globals.css';

export const metadata = {
  title: 'NextSaaS - Modern SaaS Marketing Template',
  description: 'A modern SaaS marketing template built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}