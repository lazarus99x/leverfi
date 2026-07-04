import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ToastProvider } from "@/components/ui/toast-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TradeWiseTab",
  description: "TradeWiseTab funding and automated trading platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <ToastProvider />
        <Analytics />

        {/* Smartsupp Live Chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
if (window.location.pathname.indexOf('/admin') !== 0) {
  var _smartsupp = _smartsupp || {};
  _smartsupp.key = 'a65c29e86b5ffe65fa5c1372e18cc53e113d20d9';
  window.smartsupp||(function(d) {
    var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
    s=d.getElementsByTagName('script')[0];c=d.createElement('script');
    c.type='text/javascript';c.charset='utf-8';c.async=true;
    c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
  })(document);
}
`,
          }}
        />
        <noscript>
          Powered by{" "}
          <a href="https://www.smartsupp.com" target="_blank">
            Smartsupp
          </a>
        </noscript>
      </body>
    </html>
  );
}