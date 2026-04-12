"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2 } from "lucide-react"

interface RegulationModalProps {
  trigger: React.ReactNode
  title: string
  content?: React.ReactNode
  pdfUrl?: string
  onOpenChange?: (open: boolean) => void
}

export function RegulationModal({ trigger, title, content, pdfUrl, onOpenChange }: RegulationModalProps) {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] w-[95vw] h-[90vh] bg-[#1C1C1C] border-[#3a3a3a] text-white p-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-[#BFB4AA]">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden relative w-full h-full">
          {pdfUrl ? (
            <iframe 
              src={`${pdfUrl}#toolbar=0&view=FitH`} 
              className="w-full h-full border-none block"
              title={title}
            />
          ) : (
            <ScrollArea className="h-full p-6 pt-0">
              <div className="space-y-6 text-gray-300 pb-10">
                {content}
              </div>
            </ScrollArea>
          )}
        </div>
        
        {pdfUrl && (
          <div className="p-4 border-t border-[#3a3a3a] bg-[#1C1C1C] flex justify-center">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#BFB4AA] hover:underline"
            >
              Abrir PDF em nova aba
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Content components to keep the main file clean
export const RulesContent = () => (
  <div className="space-y-8">
    <section>
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-[#BFB4AA]" />
        Como funciona
      </h4>
      <ul className="space-y-3 pl-7 list-disc">
        <li>Indique um amigo ou conhecido interessado em comprar um imóvel.</li>
        <li>Ao finalizar a compra, você receberá seu prêmio dentro de 30 dias úteis.</li>
        <li>Não há limite de indicações - quanto mais indicar, mais prêmios ganha.</li>
      </ul>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-[#BFB4AA]" />
        Requisitos
      </h4>
      <ul className="space-y-3 pl-7 list-disc">
        <li>A indicação deve ser de uma pessoa que nunca teve contato com a Armangni Imóveis.</li>
        <li>O indicado não deve ser cliente da Armangni Imóveis nos últimos 12 meses.</li>
        <li>A compra deve ser concretizada através da intermediação da Armangni Imóveis.</li>
        <li>Todos os dados fornecidos devem estar corretos e verificáveis.</li>
      </ul>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-[#BFB4AA]" />
        Prêmios
      </h4>
      <ul className="space-y-3 pl-7 list-disc">
        <li>Os prêmios são entregues mediante comprovação da conclusão da transação imobiliária.</li>
        <li>Os prêmios estão sujeitos à disponibilidade e podem variar conforme a região.</li>
        <li>Não é possível trocar prêmios por valores em dinheiro ou outros itens.</li>
        <li>A Armangni Imóveis se reserva o direito de substituir prêmios por equivalentes de mesmo valor.</li>
      </ul>
    </section>
  </div>
)

export const TermsContent = () => (
  <div className="space-y-4">
    <p>
      Ao participar desta promoção, você concorda que:
    </p>
    <ul className="space-y-3 pl-5 list-decimal">
      <li>As informações fornecidas no formulário são verdadeiras e de sua inteira responsabilidade.</li>
      <li>Você possui autorização da pessoa indicada para compartilhar seus dados de contato conosco.</li>
      <li>A Armangni Imóveis entrará em contato com o indicado mencionando sua indicação.</li>
      <li>A promoção é válida por tempo indeterminado, podendo ser suspensa ou alterada sem aviso prévio.</li>
    </ul>
  </div>
)

export const PrivacyContent = () => (
  <div className="space-y-4">
    <p>
      Sua privacidade é importante para nós. Coletamos seus dados e os dados do indicado apenas para:
    </p>
    <ul className="space-y-3 pl-7 list-disc">
      <li>Processar a indicação e verificar a elegibilidade aos prêmios.</li>
      <li>Entrar em contato para oferecer nossos serviços imobiliários ao indicado.</li>
      <li>Manter um registro histórico de indicações para fins de auditoria interna.</li>
    </ul>
    <p>
      Não compartilhamos essas informações com terceiros, exceto quando necessário para o cumprimento de obrigações legais ou para a entrega dos prêmios.
    </p>
    <p>
      Você pode solicitar a exclusão de seus dados a qualquer momento através de nossos canais de atendimento.
    </p>
  </div>
)
