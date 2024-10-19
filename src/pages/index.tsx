import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <Head>
        <title>Talent App</title>
       
      </Head>
      <h1 className="text-3xl font-bold">Welcome to the Talent Platform</h1>
      <div className="mt-4">
        <Link href="/marketplace" className="text-blue-500">
          Talent Marketplace
        </Link>
        <br />
        <Link href="/outsourcing" className="text-blue-500">
          Outsourcing & EOR
        </Link>
        <br />
        <Link href="/talentpool" className="text-blue-500">
          Talent Pool & Community
        </Link>
      </div>
    </div>
  );
}
