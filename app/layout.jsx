import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";

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
	title: 'Joseph Hangarter | Full-Stack Engineer',
	description:
		'Product-focused full-stack engineer specializing in React, Next.js, responsive interfaces, secure application workflows, and production-ready web products.',
	keywords: [
		'Full-Stack Developer',
		'Full-Stack Engineer',
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
		title: 'Joseph Hangarter | Full-Stack Engineer',
		description: 'Product-focused full-stack engineer specializing in React, Next.js, responsive interfaces, secure workflows, and web products.',
		url: siteUrl,
		siteName: 'Joseph Hangarter - Portfolio',
		images: [
			{
				url: '/jc-profile.jpg',
				width: 400,
				height: 400,
				alt: 'Joseph Hangarter - Full-Stack Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Joseph Hangarter | Full-Stack Engineer',
		description: 'Product-focused full-stack engineer specializing in React, Next.js, responsive interfaces, secure workflows, and web products.',
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
        <SmoothScroll />
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
