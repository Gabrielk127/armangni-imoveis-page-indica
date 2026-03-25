"use client"

import { motion } from "framer-motion"
import { Tv, Watch, Wine, Bot, Coffee, Home } from "lucide-react"
import { Card } from "@/components/ui/card"

const prizes = [
  {
    faixa: "Faixa 1",
    range: "R$ 500 MIL – R$ 699 MIL",
    icon: Coffee,
    name: "Cafeteira Premium",
    description: "Sistema de cápsulas profissional",
    positioning: "Prêmio aspiracional e elegante",
  },
  {
    faixa: "Faixa 2",
    range: "R$ 700 MIL – R$ 899 MIL",
    icon: Bot,
    name: "Robô Aspirador",
    description: "Inteligente com mapeamento",
    positioning: "Tecnologia e conforto",
  },
  {
    faixa: "Faixa 3",
    range: "R$ 900 MIL – R$ 1,09 M",
    icon: Wine,
    name: "Adega Climatizada",
    description: "Capacidade para 28 garrafas",
    positioning: "Lifestyle sofisticado",
  },
  {
    faixa: "Faixa 4",
    range: "R$ 1,1 M – R$ 1,39 M",
    icon: Watch,
    name: "Apple Watch",
    description: "Modelo mais recente com GPS",
    positioning: "Alta desejabilidade e premium",
  },
  {
    faixa: "Faixa 5",
    range: "A partir de R$ 1,4 M",
    icon: Tv,
    name: 'Smart TV 65"',
    description: "4K Ultra HD com tecnologia QLED",
    positioning: "Topo da campanha",
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
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-balance">
            Prêmios por Valor do Imóvel
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed px-2 sm:px-0">
            A cada venda concretizada, sua recompensa é definida pelo valor global do imóvel indicado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.faixa}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 sm:p-6 h-full hover:shadow-lg hover:shadow-[#BFB4AA]/10 transition-all duration-300 border border-[#3a3a3a] hover:border-[#BFB4AA]/50 bg-[#1C1C1C] flex flex-col">
                <div className="flex flex-col items-center text-center gap-3 flex-1">
                  {/* Faixa badge */}
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#BFB4AA] bg-[#BFB4AA]/10 px-3 py-1 rounded-full">
                    {prize.faixa}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#BFB4AA]/10 flex items-center justify-center">
                    <prize.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#BFB4AA]" />
                  </div>

                  {/* Prize info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-base sm:text-lg mb-1 text-white">{prize.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 text-pretty mb-3">{prize.description}</p>
                  </div>

                  {/* Price range with house icon */}
                  <div className="w-full border-t border-[#3a3a3a] pt-4 flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1.5 text-[#BFB4AA]">
                      <Home className="w-3.5 h-3.5" />
                      <span className="text-[10px] uppercase font-bold tracking-tighter">Valor do Imóvel</span>
                    </div>
                    <p className="text-sm text-white font-bold leading-none">{prize.range}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Performance bonus callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-14 max-w-3xl mx-auto"
        >
          <Card className="p-5 sm:p-7 border border-[#BFB4AA]/30 bg-[#BFB4AA]/5 text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#BFB4AA] bg-[#BFB4AA]/10 px-3 py-1 rounded-full mb-3">
              Bônus por Performance
            </span>
            <p className="text-white text-base sm:text-lg font-semibold mb-1">
              Bônus Extra de R$ 2.000,00
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              O participante com a maior premiação total no mês recebe um bônus adicional de R$ 2.000,00 — válido quando houver mais de uma indicação convertida em venda no período.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
            * Os prêmios físicos são entregues em até 60 dias após a escolha do prêmio, sujeitos à disponibilidade de estoque. Os prêmios não podem ser trocados por valores em dinheiro.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
