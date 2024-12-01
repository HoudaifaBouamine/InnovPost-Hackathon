import { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "./postal-services/header";
// Define Metadata
export const metadata: Metadata = {
  title: "Algerian Postal Services",
  description: "Welcome to Algerian Postal Services",
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
      <body className=" font-michroma ">
        <Suspense fallback={<Loading />}>
          <Header/>
          <div >{children}</div>
        </Suspense>
      </body>
      
    </html>
  );
}