// pages/index.tsx

import Head from 'next/head';
import Form from '../components/Form';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Form Filap</title>
      </Head>
      <main className="min-h-screen bg-gray-100">
        <Form />
      </main>
    </div>
  );
}
