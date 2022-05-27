import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { blockLibs } from '../react-builder';
import { ReactBuilderProvider } from '@mbrain/react-builder';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ReactBuilderProvider
      blockLibs={blockLibs}
      config={{
        nextJsRouter: router,
      }}
    >
      <Component {...pageProps} />
    </ReactBuilderProvider>
  )
}

export default MyApp
