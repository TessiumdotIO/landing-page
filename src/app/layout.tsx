import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Configure your custom fonts
const neueMachina = localFont({
  src: [
    {
     path: '../fonts/NeueMachina-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NeueMachina-Ultrabold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-machina',
  display: 'swap',
});

const aeonik = localFont({
  src: [
    {
      path: '../fonts/Aeonik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Aeonik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
       path: '../fonts/Aeonik-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aeonik',
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
				url: 'https://www.tessium.io/logo.png',
				width: 1200,
				height: 630,
				alt: 'Tessium Platform Image',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Tessium | Web3 Evolve-&-Earn Platform',
		description:
			'Join Tessium, the premier Web3 Evolve-&-Earn platform where knowledge acquisition translates directly to valuable rewards.',
		images: ['https://www.tessium.io/logo.png'],
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
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={`${neueMachina.variable} ${aeonik.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
