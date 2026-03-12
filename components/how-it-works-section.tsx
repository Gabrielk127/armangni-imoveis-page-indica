"use client"

import { motion } from "framer-motion"
import { UserPlus, MessageCircle, ShoppingBag, Gift } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Preencha o Formulário",
    description: "Informe os dados da pessoa que você deseja indicar de forma simples e rápida",
  },
  {
    icon: MessageCircle,
    title: "Entramos em Contato",
    description: "Nossa equipe entra em contato com seu indicado para apresentar nossos imóveis",
  },
  {
    icon: ShoppingBag,
    title: "Indicado Realiza a Compra",
    description: "Quando a venda é concretizada, você já está garantido no programa",
  },
  {
    icon: Gift,
    title: "Escolha Seu Prêmio",
    description: "Você escolhe o prêmio que preferir e retira em nossa central",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-14 sm:py-20 md:py-32 bg-[#1C1C1C]">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-balance">Como Funciona</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed px-2 sm:px-0">
            Participar é simples, seguro e totalmente gratuito
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#BFB4AA] flex items-center justify-center shadow-lg shadow-[#BFB4AA]/20">
                      <step.icon className="w-7 h-7 sm:w-10 sm:h-10 text-[#1C1C1C]" />
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#262626] border-2 border-[#BFB4AA] flex items-center justify-center font-bold text-xs sm:text-base text-[#BFB4AA]">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-base sm:text-xl mb-2 sm:mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base text-pretty leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-[#3a3a3a] z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
