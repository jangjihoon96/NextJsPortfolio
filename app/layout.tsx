import "./globals.css";

export const metadata = {
  title: "Jihoon Jang Portfolio",
  description: "Use Next.js & Typescript and create my original porfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
