import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project One Earth",
  description: "A living manifesto for human freedom and planetary stewardship.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
