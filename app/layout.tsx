import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import localFont from "next/font/local";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/pretendard/Pretendard-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
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
