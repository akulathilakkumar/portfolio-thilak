
import './globals.css';

export const metadata = {
  title: 'Thilak Portfolio',
  description: 'Portfolio of Thilak Kumar Akula',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
