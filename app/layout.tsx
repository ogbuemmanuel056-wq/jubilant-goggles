import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turbo Credit",
  description: "Turbo Credit loan application portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
