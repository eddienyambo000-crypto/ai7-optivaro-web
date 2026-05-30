import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eye Vision Center | Premium Eye Care in Rwanda",
  description:
    "Book precision eye exams and curated eyewear fittings at Eye Vision Center in Kigali and Nyamata.",
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
