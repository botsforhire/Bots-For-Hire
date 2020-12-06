/* Enables Bootstrap */

import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/global.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}