import { Geist, Raleway, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const montserrat = Montserrat({
  variable: "--font-raleway",
  subsets: ["latin"],
});
const jmono = JetBrains_Mono({
  variable: "--font-jmono",
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
        className={montserrat.className}
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
