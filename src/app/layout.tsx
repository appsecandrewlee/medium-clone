import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";
import { Header } from "./_components/Header";

export const metadata = {
  
  title: "Medium Clone - Lyra Technologies",
  description: "This is a trial application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
