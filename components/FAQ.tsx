import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qual a diferença entre Climatizador e Ar Condicionado?",
    answer: "O climatizador ventila e umidifica o ar através da evaporação da água, sendo mais econômico e ecológico, ideal para ambientes abertos ou semiabertos. Já o ar condicionado refrigera o ambiente através de gás refrigerante, baixando a temperatura de forma mais drástica, ideal para locais fechados."
  },
  {
    question: "Como escolho a potência ideal (BTUs) para meu ambiente?",
    answer: "A escolha depende da área do ambiente (m²), incidência solar e número de pessoas. De forma geral, calcula-se cerca de 600 a 800 BTUs por m². Recomendamos usar nossa Calculadora de BTUs nesta página ou entrar em contato com nossos especialistas para um dimensionamento preciso."
  },
  {
    question: "Vocês realizam instalação e manutenção?",
    answer: "Sim! A Climatec oferece serviços completos que incluem venda, instalação, manutenção preventiva e corretiva, além de higienização de equipamentos de todas as marcas e modelos."
  },
  {
    question: "Qual o prazo de garantia dos serviços e produtos?",
    answer: "Nossos produtos possuem garantia de fábrica que varia conforme o fabricante (geralmente 1 ano). Para serviços de instalação e manutenção, oferecemos garantia de 90 dias sobre a mão de obra, conforme o código de defesa do consumidor."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos pagamentos via PIX, cartões de crédito e débito. Para projetos corporativos ou grandes volumes, consulte nossas condições especiais de faturamento."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-background-dark/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Perguntas <span className="text-primary dark:text-secondary">Frequentes</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-slate-800 dark:text-slate-100 pr-8">
                  {item.question}
                </span>
                <span 
                  className={`material-icons-outlined text-primary dark:text-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  expand_more
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;