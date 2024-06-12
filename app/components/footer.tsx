import Head from 'next/head'

export default function Foots() {
  return (
    <div>

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <footer className="bg-black rounded-lg shadow m-3 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-white-500 hover:text-white">© 2024 
                    Okoshko Production
                </span>
            </div>
        </footer>
    </div>
  )
}