import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <div className="bg-blue-500 text-white p-4">Hello, Tailwind CSS!</div>
      <Footer />
    </>
  );
}
