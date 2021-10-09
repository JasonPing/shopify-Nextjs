import Head from "next/head";
import { ProductPage } from "../components/ProductPage";

const testProductHandle =
  "world-of-warcraft-lich-king-arthas-26-premium-statue";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-1 px-5 md:px-10 lg:px-20">
        <ProductPage productHandle={testProductHandle} />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        footer
      </footer>
    </div>
  );
}
