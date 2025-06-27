import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Tessium | Web3 Evolve-&-Earn Platform',
	description:
		'Join Tessium, the premier Web3 Evolve-&-Earn platform where knowledge acquisition translates directly to valuable rewards.',
	openGraph: {
		title: 'Tessium | Web3 Evolve-&-Earn Platform',
		description:
			'Join Tessium, the premier Web3 Evolve-&-Earn platform where knowledge acquisition translates directly to valuable rewards.',
		url: 'https://www.tessium.io',
		type: 'website',
		images: [
			{
				url: 'https://landing-page-zeta-brown.vercel.app/logo.png',
				width: 1200, // Optional: Add width for better optimization
				height: 630, // Optional: Add height
				alt: 'Tessium Platform Image', // Optional: Add alt text
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Tessium | Web3 Evolve-&-Earn Platform',
		description:
			'Join Tessium, the premier Web3 Evolve-&-Earn platform where knowledge acquisition translates directly to valuable rewards.',
		images: ['https://landing-page-zeta-brown.vercel.app/logo.png'],
		site: '@Tessium_io',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
