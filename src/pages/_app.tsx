import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NameAgeContextProvider } from '@/context/NameAgeContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NameAgeContextProvider>
				<Component {...pageProps} />
			</NameAgeContextProvider>
		</>
	);
}
