import "./globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
  weights: [400, 500, 600, 700],
  subsets: ["latin"],
  variable: "--font--montserrat",
});

export const metadata = {
  title: "Movies Enthusiast",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="body px-4 md:px-20 pb-14">
        <Link className="flex justify-items-start py-2" href={"/#"}>
          <Image src="/bg.jpg" alt="" width={100} height={100} />
        </Link>
        <div className="flex justify-items-start my-10">
          <Link
            className="text-4xl font-bold text-gray-500 underline"
            href={"/#"}
          >
            Movies Enthusiast
          </Link>
        </div>
        <p className="text-2xl my-10">Where else to find popular movies?</p>
        {children}
      </body>
    </html>
  );
}
