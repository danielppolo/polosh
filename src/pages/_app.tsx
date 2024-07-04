import type { AppProps } from "next/app";

import "@/lib/globals.css";
import Navbar from "@/components/shared/navbar";
import { cn } from "@/lib/utils";
import fonts from "@/utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cn(
        "min-h-screen text-dark font-sans bg-category flex flex-col polka",
        fonts.sans.variable,
        fonts.display.variable,
      )}
    >
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
