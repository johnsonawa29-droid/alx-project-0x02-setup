import Head from "next/head";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Project Setup</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to ALX Next.js Project 🚀
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Your project is successfully set up with TypeScript and Tailwind CSS.
        </p>
      </main>
    </>
  );
}
