import '@/styles/globals.css'
import { UserContextProvider } from '../Context'

export default function App({ Component, pageProps }) {
  return <UserContextProvider> <Component {...pageProps} /> </UserContextProvider>
}
