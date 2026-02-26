import type { Metadata } from "next";
import Script from "next/script";
import { DialRoot } from "dialkit";
import "dialkit/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenLayer Points",
  description: "GenLayer Points Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <DialRoot position="bottom-right" />
        <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
