import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "./header";
import Footer from "./footer";

export const metadata = {
  title: "Jihoon Jang Portfolio",
  description: "Use Next.js & Typescript and create my original porfolio",
  authors: { name: "장지훈" },
  keywords: [
    "프론트엔드 포트폴리오",
    "장지훈 포트폴리오",
    "장지훈",
    "포트폴리오",
    "portfolio",
    "frontend",
    "developer",
    "react portfolio",
    "리액트 포트폴리오",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
