import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

// Adds the bar-of-progress using next-router, and accounts for start, complete and errors upon page completion. 
const progress = new ProgressBar({
  size:6,
  color:'#FE595E',
  className:'z-50',
  delay: 100,
})
// Takes in two arguments
Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
