import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, modal }) {
  // sample function for async data fetching
  const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 1000);
    });
  };

  const data = await fetchData();

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {data}
        {modal}    
      </body>
    </html>
  );
}
