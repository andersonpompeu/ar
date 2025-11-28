import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-white">
          Sobre a <span className="text-cyan-600 dark:text-cyan-400">empresa</span>
        </h2>
        <div className="inline-block bg-cyan-500 h-1 w-24 mt-3 rounded mb-8"></div>
        
        <div className="max-w-4xl mx-auto text-left space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
          <p>
            Há 9 anos no mercado, a Climatec é especialista em soluções completas de climatização. 
            Localizada em Maringá, nossa loja física atende clientes de toda a região, enquanto 
            nosso canal online leva qualidade e eficiência para todo o Brasil.
          </p>
          <p>
            Oferecemos uma ampla linha de climatizadores comerciais, domésticos e industriais, 
            ideais para diferentes necessidades. Além disso, contamos com serviços de manutenção, 
            assistência técnica, locação de climatizadores e instalação profissional, garantindo 
            conforto e praticidade em todas as etapas.
          </p>
          <p>
            Na Climatec, nosso compromisso é criar ambientes agradáveis e funcionais, com produtos 
            de alta performance e atendimento especializado. Transforme o clima do seu espaço com 
            quem entende do assunto!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;