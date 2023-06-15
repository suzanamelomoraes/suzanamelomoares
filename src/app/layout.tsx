import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/header/Header";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Suzana Melo Moraes",
  description: "Personal website and tech community space",
  keywords:
    "curriculum, personal, community, articles, github, code, technology, web development, full stack, aws",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
