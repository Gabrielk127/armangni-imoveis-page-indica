"use client"

import { motion } from "framer-motion"
import { Tv, Watch, Wine, Album as Vacuum, Coffee } from "lucide-react"
import { Card } from "@/components/ui/card"

const prizes = [
  {
    icon: Tv,
    name: 'Smart TV 65"',
    description: "4K Ultra HD com tecnologia QLED",
  },
  {
    icon: Watch,
    name: "Apple Watch",
    description: "Série mais recente com GPS",
  },
  {
    icon: Wine,
    name: "Adega Climatizada",
    description: "Capacidade para 28 garrafas",
  },
  {
    icon: Vacuum,
    name: "Robô Aspirador",
    description: "Inteligente com mapeamento",
  },
  {
    icon: Coffee,
    name: "Cafeteira Premium",
    description: "Sistema de cápsulas profissional",
  },
]

export function PrizesSection() {
  return (
    <section id="premios" className="py-14 sm:py-20 md:py-32 bg-[#262626]">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-balance">Escolha Seu Prêmio</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed px-2 sm:px-0">
            Quando sua indicação resultar em uma venda, você escolhe o prêmio que mais combina com você
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 sm:p-6 h-full hover:shadow-lg hover:shadow-[#BFB4AA]/10 transition-all duration-300 border border-[#3a3a3a] hover:border-[#BFB4AA]/50 bg-[#1C1C1C]">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#BFB4AA]/10 flex items-center justify-center">
                    <prize.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#BFB4AA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-white">{prize.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 text-pretty">{prize.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            * Os prêmios estão sujeitos à disponibilidade e podem variar conforme a região.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
