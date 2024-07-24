
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/index.css'; 
import '../styles/login.css'; 
import '../styles/dashboard.css'; 
import '../styles/datos.css'; 
import '../styles/FormularioRegistro.css';
import '../styles/barra.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
