"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const rules = [
  {
    title: "Quem Pode Participar",
    items: [
      "Pessoas físicas ou jurídicas maiores de 18 anos com CPF/CNPJ válido",
      "Não há vínculo empregatício direto com a Armangni Imóveis",
      "Preenchimento correto do formulário de indicação disponível na plataforma",
      "Concordância com todos os termos desta Campanha ao enviar a indicação",
    ],
  },
  {
    title: "Indicação Válida",
    items: [
      "Dados do indicador e do indicado preenchidos corretamente no formulário",
      "O indicado não pode estar previamente na base de clientes nem em atendimento ativo da Armangni Imóveis",
      "O indicado deve ser contatado pela Armangni Imóveis e concretizar a compra de um imóvel",
      "Indicações com dados incompletos ou inválidos serão consideradas nulas",
    ],
  },
  {
    title: "Pagamento & Prêmios",
    items: [
      "Pagamento via PIX ou transferência bancária em até 30 dias úteis após a assinatura do contrato",
      "Prêmios físicos entregues em até 60 dias após a escolha do prêmio no endereço indicado",
      "Cada indicado válido gera premiação apenas para o primeiro participante que o cadastrou",
      "Não há limite de indicações — cada indicação deve resultar em venda distinta",
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
            Conheça todos os detalhes sobre como participar do programa de indicações premiadas
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
            Ao submeter o formulário de indicação, você concorda automaticamente com todas as regras e condições descritas acima. A Campanha é válida por prazo indeterminado e poderá ser suspensa ou alterada a qualquer momento mediante aviso prévio. Em caso de dúvidas, entre em contato conosco.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
