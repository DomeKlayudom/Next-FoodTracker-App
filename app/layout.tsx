import type { Metadata } from "next";
import { Prompt} from "next/font/google";
import "./globals.css";

const promt = Prompt({
subsets: ["latin","thai"],
weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Food Tracker V 0.1",
  description: "Food Tracker for everyone",
  keywords: ["food","tracker"],
  icons: {
    icon: "/next.svg",
  },
  authors: [{ name: "DomeDome", url: "https://github.com/DomeKlayudom" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${promt.className}`}
      >
        {children}
      </body>
    </html>
  );
}
