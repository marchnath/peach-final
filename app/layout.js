import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Specify the weights you need
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Prosto+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  );
}
