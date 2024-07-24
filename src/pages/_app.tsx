
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/index.css'; 
import '../styles/login.css'; 
import '../styles/dashboard.css'; 

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
