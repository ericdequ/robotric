import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BookCard({ title, cover, links, description }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative h-64 w-full">
        <Image 
          src={cover} 
          alt={title} 
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white font-bangers">{title}</h2>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4">{description || "A captivating journey with a waterproof robot as it navigates the challenges of a mighty river and yearns to understand the essence of humanity."}</p>
        <div className="space-y-2">
          {links.map((link, index) => (
            <a 
              key={index} 
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
    </motion.div>
  )
}
