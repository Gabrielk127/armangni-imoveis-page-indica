"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function ReferralForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [acceptedRules, setAcceptedRules] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!acceptedTerms || !acceptedPrivacy || !acceptedRules) {
      toast({
        title: "Atenção",
        description: "Por favor, aceite os termos, as regras da campanha e a política de privacidade para continuar.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      // Collecting data from the form
      const data = {
        name: (document.getElementById("seu-nome") as HTMLInputElement).value,
        email: (document.getElementById("seu-email") as HTMLInputElement).value,
        mobile_phone: (document.getElementById("seu-telefone") as HTMLInputElement).value,
        nome_do_indicado: (document.getElementById("indicado-nome") as HTMLInputElement).value,
        telefone_do_indicado: (document.getElementById("indicado-telefone") as HTMLInputElement).value,
        email_do_indicado: (document.getElementById("indicado-email") as HTMLInputElement).value,
        cidade_do_indicado: (document.getElementById("indicado-cidade") as HTMLInputElement).value,
        cpf_do_indicador: (document.getElementById("seu-cpf") as HTMLInputElement).value,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar indicação");
      }

      toast({
        title: "Indicação enviada com sucesso!",
        description: "Obrigado por indicar a Armangni Imóveis. Nossa equipe entrará em contato com o indicado em breve.",
      })

      form.reset()
      setAcceptedTerms(false)
      setAcceptedPrivacy(false)
      setAcceptedRules(false)
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro no envio",
        description: "Ocorreu um erro ao enviar sua indicação. Verifique os dados e tente novamente.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="formulario" className="py-14 sm:py-20 md:py-32 bg-[#262626]">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-balance">Faça Sua Indicação</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed px-2 sm:px-0">
            Preencha corretamente os dados do formulário da Campanha Indicação Premiada
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-5 sm:p-6 md:p-10 shadow-xl border border-[#3a3a3a] bg-[#1C1C1C]">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Dados do Indicado */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#BFB4AA] mb-3 sm:mb-4">Dados do Indicado</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="indicado-nome" className="text-gray-300">
                      Nome Completo do Indicado *
                    </Label>
                    <Input
                      id="indicado-nome"
                      placeholder="Nome completo"
                      required
                      className="bg-[#262626] border-[#3a3a3a] text-white placeholder:text-gray-500 focus:border-[#BFB4AA]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="indicado-telefone" className="text-gray-300">
                      Telefone do Indicado *
                    </Label>
                    <Input
                      id="indicado-telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      required
                      className="bg-[#262626] border-[#3a3a3a] text-white placeholder:text-gray-500 focus:border-[#BFB4AA]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="indicado-email" className="text-gray-300">
                      E-mail do Indicado *
                    </Label>
                    <Input
                      id="indicado-email"
                      type="email"
                      placeholder="email@exemplo.com"
                      required
                      className="bg-[#262626] border-[#3a3a3a] text-white placeholder:text-gray-500 focus:border-[#BFB4AA]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="indicado-cidade" className="text-gray-300">
                      Cidade de Interesse *
                    </Label>
                    <Input
                      id="indicado-cidade"
                      placeholder="Cidade"
                      required
                      className="bg-[#262626] border-[#3a3a3a] text-white placeholder:text-gray-500 focus:border-[#BFB4AA]"
                    />
                  </div>
                </div>
              </div>

              {/* Seus Dados */}
              <div className="space-y-4 pt-4 sm:pt-6 border-t border-[#3a3a3a]">
                <h3 className="text-lg sm:text-xl font-semibold text-[#BFB4AA] mb-3 sm:mb-4">Seus Dados (Indicador)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="seu-nome" className="text-gray-300">
                      Seu Nome Completo *
                    </Label>
                    <Input
                      id="seu-nome"
                      placeholder="Seu nome"
                      required
                      className="bg-[#262626] border-[#3a3a3a] text-white placeholder:text-gray-500 focus:border-[#BFB4AA]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seu-cpf" className="text-gray-300">
                      Seu CPF/CNPJ *
                    </Label>
                    <Input
                      id="seu-cpf"
                      placeholder="000.000.000-00"
                      required
                      className="bg-[#262626] border-[#3a3a3a] text-white placeholder:text-gray-500 focus:border-[#BFB4AA]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="seu-email" className="text-gray-300">
                      Seu E-mail *
                    </Label>
                    <Input
                      id="seu-email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="bg-[#262626] border-[#3a3a3a] text-white placeholder:text-gray-500 focus:border-[#BFB4AA]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seu-telefone" className="text-gray-300">
                      Seu Telefone *
                    </Label>
                    <Input
                      id="seu-telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      required
                      className="bg-[#262626] border-[#3a3a3a] text-white placeholder:text-gray-500 focus:border-[#BFB4AA]"
                    />
                  </div>
                </div>
              </div>

              {/* Termos */}
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-[#3a3a3a]">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="rules"
                    checked={acceptedRules}
                    onCheckedChange={(checked) => setAcceptedRules(checked as boolean)}
                    className="border-[#3a3a3a] data-[state=checked]:bg-[#BFB4AA] data-[state=checked]:border-[#BFB4AA] mt-1"
                  />
                  <Label htmlFor="rules" className="text-sm leading-relaxed cursor-pointer text-gray-400">
                    Declaro que li e concordo com todas as regras da campanha de indicações descritas no regulamento.
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={acceptedTerms}
                    onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                    className="border-[#3a3a3a] data-[state=checked]:bg-[#BFB4AA] data-[state=checked]:border-[#BFB4AA] mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer text-gray-400">
                    Aceito os termos da promoção e declaro que as informações fornecidas são verdadeiras.
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={acceptedPrivacy}
                    onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
                    className="border-[#3a3a3a] data-[state=checked]:bg-[#BFB4AA] data-[state=checked]:border-[#BFB4AA] mt-1"
                  />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer text-gray-400">
                    Li e aceito a Política de Privacidade e LGPD da Armangni Imóveis.
                  </Label>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-center text-gray-500 mb-6">
                  * Campos obrigatórios. Sua indicação só será válida se o indicado não estiver em nossa base ativa.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#BFB4AA] hover:bg-[#a89f96] text-[#1C1C1C] py-5 sm:py-6 text-base sm:text-lg font-semibold cursor-pointer shadow-lg shadow-[#BFB4AA]/10"
                  disabled={loading}
                >
                  {loading ? "Enviando Indicação..." : "Indicar Agora e Multiplicar!"}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
