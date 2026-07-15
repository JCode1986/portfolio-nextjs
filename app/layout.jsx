import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://josephhangarter.com';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: 'Joseph Hangarter - Frontend Developer',
	description:
		'Frontend developer portfolio for Joseph Hangarter, focused on React, Next.js, polished UI, responsive systems, accessibility, and performance-minded product interfaces.',
	keywords: [
		'Frontend Developer',
		'Web Developer',
		'React Developer',
		'Next.js',
		'TypeScript',
		'JavaScript',
		'UI/UX',
		'Responsive Design',
		'Web Animation',
		'Modern Web Development',
		'CSS Expert',
		'Performance Optimization',
		'Web Accessibility',
		'Component Design',
		'Joseph Hangarter',
	],
	authors: [{ name: 'Joseph Hangarter' }],
	creator: 'Joseph Hangarter',
	openGraph: {
		title: 'Joseph Hangarter - Frontend Developer Portfolio',
		description: 'Frontend developer crafting fast, polished React and Next.js interfaces for product teams.',
		url: siteUrl,
		siteName: 'Joseph Hangarter - Portfolio',
		images: [
			{
				url: '/jc-profile.jpg',
				width: 400,
				height: 400,
				alt: 'Joseph Hangarter - Frontend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Joseph Hangarter - Frontend Developer',
		description: 'Frontend developer crafting fast, polished React and Next.js interfaces for product teams.',
		images: ['/jc-profile.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
