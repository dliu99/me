import { Geist, Raleway, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
/*const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
*/
export const metadata = {
  title: "devin's website",
  description: "me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
