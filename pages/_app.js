/* Enables Bootstrap */

import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
  return <div>
  <Head><meta name="viewport" content="viewport-fit=cover" /></Head> <Component {...pageProps} /></div>
}