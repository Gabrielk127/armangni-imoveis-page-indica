"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-") // Replaces spaces with hyphens
  }

  const handleNavigation = (id: string) => {
    const normalizedId = normalizeText(id)
    const section = document.getElementById(normalizedId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsOpen(false)
            observer.disconnect()
          }
        },
        { threshold: 0.7 },
      )

      observer.observe(section)
    }
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  }

  const menuItems = ["Início", "Prêmios", "Como Funciona", "Regras", "Formulário"]

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1C]/80 backdrop-blur-lg shadow-lg py-4 max-w-[1200px] rounded-3xl mt-4 mx-4 flex justify-between items-center px-6">
        <div className="text-white text-xl font-bold">
          <Image src="/logo-branco.png" width={180} height={50} alt="Logo Armangni Imóveis" />
        </div>
        <button onClick={toggleMenu} className="z-50 cursor-pointer">
          <motion.div initial={{ rotate: 0 }} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <X className="h-8 w-8 text-white" /> : <Menu className="h-10 w-10 text-white" />}
          </motion.div>
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-x-0 z-40 flex flex-col items-center justify-start h-auto bg-[#1C1C1C]/95 backdrop-blur-lg shadow-lg text-white py-16 px-8 mx-4 mt-20 rounded-3xl"
          >
            <motion.ul className="space-y-8 text-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="text-xl hover:text-[#BFB4AA] cursor-pointer transition duration-300"
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              className="mt-8"
            >
              <a href="#formulario">
                <button
                  className="bg-[#BFB4AA] text-[#1C1C1C] font-bold px-6 py-3 rounded-full hover:bg-[#a89f96] transition duration-300 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Indicar Agora
                </button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
