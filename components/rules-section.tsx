"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const rules = [
  {
    title: "Como funciona",
    items: [
      "Indique um amigo ou conhecido interessado em comprar um imóvel",
      "Ao finalizar a compra, você receberá seu prêmio dentro de 30 dias úteis",
      "Não há limite de indicações - quanto mais indicar, mais prêmios ganha",
    ],
  },
  {
    title: "Requisitos",
    items: [
      "A indicação deve ser de uma pessoa que nunca teve contato com a Armangni Imóveis",
      "O indicado não deve ser cliente da Armangni Imóveis nos últimos 12 meses",
      "A compra deve ser concretizada através da intermediação da Armangni Imóveis",
      "Todos os dados fornecidos devem estar corretos e verificáveis",
    ],
  },
  {
    title: "Prêmios",
    items: [
      "Os prêmios são entregues mediante comprovação da conclusão da transação imobiliária",
      "Os prêmios estão sujeitos à disponibilidade e podem variar conforme a região",
      "Não é possível trocar prêmios por valores em dinheiro ou outros itens",
      "A Armangni Imóveis se reserva o direito de substituir prêmios por equivalentes de mesmo valor",
    ],
  },
]

export function RulesSection() {
  return (
    <section id="regras" className="py-14 sm:py-20 md:py-32 bg-[#1C1C1C]">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-balance">Regras da Campanha</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed px-2 sm:px-0">
            Conheça todos os detalhes sobre como participar do programa de indicações
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
          {rules.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.15 }}
            >
              <Card className="p-5 sm:p-8 h-full border border-[#3a3a3a] bg-[#262626] hover:border-[#BFB4AA]/30 transition-colors duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-[#BFB4AA] mb-4 sm:mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.15 + itemIndex * 0.05 }}
                      className="flex gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#BFB4AA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed text-xs sm:text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
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
          <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Ao submeter o formulário de indicação, você concorda automaticamente com todas as regras e condições descritas acima. Em caso de dúvidas, entre em contato conosco.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
