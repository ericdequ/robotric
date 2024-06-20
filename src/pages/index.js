import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import BookCard from '../components/BookCard'
import booksData from '../data/books.json'
import { useState } from 'react'

export default function Home() {
  const [hoveredBook, setHoveredBook] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Head>
        <title>Robot Ric's Adventures</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Bangers&display=swap" rel="stylesheet" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-7xl font-bold text-center mb-12 font-bangers text-blue-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        >
          Robot Ric's Amazing Adventures
        </motion.h1>

        <motion.p
          className="text-2xl text-center mb-16 font-roboto text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Join Robot Ric on his incredible journey through time and space!
        </motion.p>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {booksData.books.map((book, index) => (
            <motion.div
              key={index}
              className="w-full max-w-md"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.2 } 
              }}
              onHoverStart={() => setHoveredBook(index)}
              onHoverEnd={() => setHoveredBook(null)}
            >
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover object-top transition-all duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                  <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white font-bangers">{book.title}</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{book.description || "A captivating journey with a waterproof robot as it navigates the challenges of a mighty river and yearns to understand the essence of humanity."}</p>
                  <div className="space-y-2">
                    {book.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex}
                        href={link.url}
                        className="block w-full text-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy on {link.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {hoveredBook === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-4 bg-white p-4 rounded-lg shadow-lg"
                  >
                    <p className="text-sm text-gray-600">Get ready for an electrifying adventure with Robot Ric!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="text-center py-8 bg-blue-600 text-white mt-12">
        <p>&copy; 2024 Robot Ric Adventures. All rights reserved.</p>
      </footer>
    </div>
  )
}
