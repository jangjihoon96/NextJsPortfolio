import "./globals.css";
import Header from "./header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
