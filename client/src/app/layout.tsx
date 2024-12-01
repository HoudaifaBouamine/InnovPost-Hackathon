import { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Nav from "./postal-services/nav";

// Define Metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Michroma&family=Roboto+Condensed:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className=" font-michroma">
        <Suspense fallback={<Loading />}>
          <Nav />
          <div className="bg-primary">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}