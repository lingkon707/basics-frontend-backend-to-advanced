// pages/upload.tsx

import Head from 'next/head';
import ProductUploadForm from './ProductUploadForm';

export default function UploadPage() {
  return (
    <>
      <Head>
        <title>Upload Product</title>
      </Head>
      <main className="min-h-screen bg-gray-100 py-8">
        <ProductUploadForm />
      </main>
    </>
  );
}
