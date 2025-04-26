import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIAP",
  description: "A maior faculdade de tecnologia"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
