import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Nav from "@/components/ui/Nav";
import { navItems } from "@/data";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Chromax Dev portfolio",
  description:
    "Explore the portfolio of Godskey, a skilled web developer specializing in creating responsive, user-friendly websites. Discover innovative projects showcasing expertise in HTML, CSS, JavaScript, and modern frameworks. Transform your online presence with professional web development services",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OutfitFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
