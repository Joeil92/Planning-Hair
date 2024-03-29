import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@PH/providers/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planning-Hair",
  description: "Clone planity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
