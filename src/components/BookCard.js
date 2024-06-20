import { motion } from 'framer-motion'

export default function BookCard({ title, cover, links }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={cover} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="space-y-2">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="block text-blue-500 hover:text-blue-700"
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