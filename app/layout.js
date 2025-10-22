import SiteShell from "@/components/layout/SiteShell";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

const snellBT = localFont({
  src: [
    {
      path: "../public/fonts/SnellBT-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SnellBT-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-snell-bt",
  display: "swap",
});

const snellRoundhand = localFont({
  src: [
    {
      path: "../public/fonts/SnellRoundhand-BoldScript.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SnellRoundhand-BlackScript.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-snell-roundhand",
  display: "swap",
});

export const metadata = {
  title: "My Proposal Masters - Professional Consulting & Grant Writing Services",
  description:
    "Expert grant writing, consulting, program development, and fundraising solutions to help your organization thrive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${snellBT.variable} ${snellRoundhand.variable} ${dmSans.variable} antialiased`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
