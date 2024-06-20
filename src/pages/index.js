import Head from 'next/head'
import { motion } from 'framer-motion'
import BookCard from '../components/BookCard'
import booksData from '../data/books.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Robot Ric Book Series</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the Robot Ric Book Series
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {booksData.books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </motion.div>
      </main>
    </div>
  )
}