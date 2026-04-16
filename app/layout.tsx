import './globals.css';

export const metadata = {
  title: 'AutoTask Africa',
  description: 'AI-driven Web3 Tasks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
