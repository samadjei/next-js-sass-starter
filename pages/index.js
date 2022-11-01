import Head from 'next/head';
import Layout from '../src/layout/Layout';

export default function Home() {
	return (
		<div>
			<Head>
			<title>Next JS Sass Starter</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container">
				<h1>Welcome to Sam's Next.js starter</h1>
			</main>
		</div>
	);
}
