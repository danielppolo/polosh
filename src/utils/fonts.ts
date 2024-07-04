import localFont from "next/font/local";

const display = localFont({
  src: "../assets/fonts/ribes/Ribes-Regular.woff2",
  display: "swap",
  variable: "--font-display",
});

const sans = localFont({
  src: "../assets/fonts/absans/Absans-Regular.woff2",
  display: "swap",
  variable: "--font-sans",
});

const fonts = { display, sans };

export default fonts;
