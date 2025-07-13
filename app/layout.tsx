import "../style/global.css";
import Navigation from "../components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Next Movies", default: "Loading..." },
  description: "집에 보내줘 빨리, 바이 짜이쩬~",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
