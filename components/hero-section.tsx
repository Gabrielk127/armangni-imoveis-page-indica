"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gift, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1C] pt-20 pb-10 md:pt-24 md:pb-0"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-5 sm:px-6 py-10 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#262626] text-[#BFB4AA] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 md:mb-8 border border-[#BFB4AA]/20">
              <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Campanha Indicação Premiada
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 text-balance leading-tight"
          >
            Sua Indicação Vale <span className="text-[#BFB4AA]">Prêmios Premium</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto text-pretty leading-relaxed px-2 sm:px-0"
          >
            Compartilhe a excelência da Armangni Imóveis. Quando sua indicação se torna uma venda, você ganha de Apple Watches a Smart TVs de 65".
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0"
          >
            <Button
              size="lg"
              className="bg-[#BFB4AA] hover:bg-[#a89f96] text-[#1C1C1C] w-full sm:w-auto px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold cursor-pointer"
              onClick={scrollToForm}
            >
              Indicar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#BFB4AA] text-[#BFB4AA] hover:bg-[#BFB4AA]/10 w-full sm:w-auto px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent cursor-pointer"
              onClick={() => document.getElementById("premios")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Tabela de Prêmios
            </Button>
          </motion.div>

          {/* Social Proof / Mention the bonus */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 text-sm text-gray-500 font-medium"
          >
            Bônus extra de +R$ 2.000,00 para o melhor indicador do mês!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <ArrowDown className="w-6 h-6 mx-auto text-gray-500 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
