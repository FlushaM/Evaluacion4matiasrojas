
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/index.css'; 

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
