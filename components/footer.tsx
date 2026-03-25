"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white py-10 sm:py-16">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <Image
                src="/logo-branco.png"
                alt="Armangni Imóveis"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Realizando sonhos e construindo histórias.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#BFB4AA] transition-colors cursor-pointer">
                  Início
                </a>
              </li>
              <li>
                <a href="#premios" className="hover:text-[#BFB4AA] transition-colors cursor-pointer">
                  Prêmios
                </a>
              </li>
              <li>
                <a href="#regras" className="hover:text-[#BFB4AA] transition-colors cursor-pointer">
                  Regras
                </a>
              </li>
              <li>
                <a href="#formulario" className="hover:text-[#BFB4AA] transition-colors cursor-pointer">
                  Formulário
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#BFB4AA]" />
                <span>(43) 9170-8520</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#BFB4AA]" />
                <span>contato@armangni.com.br</span>
              </li>

            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 9h às 13h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-[#262626] pt-8 text-center text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Armangni Imóveis. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
