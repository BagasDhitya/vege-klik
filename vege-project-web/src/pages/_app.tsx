import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";

const API_DEVELOPMENT = process.env.NEXT_PUBLIC_API_DEVELOPMENT;

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = API_DEVELOPMENT;
  return <Component {...pageProps} />;
}
