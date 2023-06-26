import '@/styles/globals.css';

import { ContextProvider } from '@/Context/ContextProvider';
export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
