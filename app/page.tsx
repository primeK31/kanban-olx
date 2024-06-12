'use client';

import Head from 'next/head'
import Heads from './components/header'
import Foots from './components/footer'
import { useProduct } from './services/productsService';


export default function Home() {
  const { data, error } = useProduct();
  return (
    <div>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Heads></Heads>
      <div className="bg-black rounded-lg dark:bg-gray-800 w-full md:w-auto mx-10 p-10">
            <h1 className='m-10 text-2xl'>Welcome to the Kanban OLX!</h1>
            <p>Now here you can read <a href="\posts" className="hover:underline">blogs</a></p>
            <h1>Products List</h1>
            <ul>
              {data?.map((product) => (
                <li>{product.title}</li>
              ))}
            </ul>
        </div>
      <Foots></Foots>
    </div>
  )
}