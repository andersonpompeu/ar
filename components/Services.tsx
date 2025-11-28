import React, { useState } from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { icon: 'support_agent', title: 'ASSISTÊNCIA', buttonText: 'Solicitar suporte' },
  { icon: 'build', title: 'MANUTENÇÃO', buttonText: 'Agendar visita' },
  { icon: 'plumbing', title: 'INSTALAÇÃO', buttonText: 'Pedir orçamento' },
  { icon: 'event_seat', title: 'LOCAÇÃO', buttonText: 'Cotar aluguel' },
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService: string;
}

const ServiceModal: React.FC<ModalProps> = ({ isOpen, onClose, initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    serviceType: initialService,
    message: ''
  });

  // Update local state when initialService changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, serviceType: initialService }));
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Obrigado ${formData.name}! Recebemos sua solicitação para ${formData.serviceType}. Entraremos em contato pelo número/email: ${formData.contact}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-surface-dark rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-fade-in border border-slate-100 dark:border-slate-700">
        <div className="bg-primary p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Solicitar Serviço</h3>
            <p className="text-cyan-100 text-sm">Preencha os dados abaixo</p>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 rounded-full p-1 transition-colors">
            <span className="material-icons-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Seu Nome</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Contato (WhatsApp ou Email)</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="(00) 00000-0000"
              value={formData.contact}
              onChange={(e) => setFormData({...formData, contact: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tipo de Serviço</label>
            <select 
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              value={formData.serviceType}
              onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
            >
              {services.map((s, i) => (
                <option key={i} value={s.title}>{s.title}</option>
              ))}
              <option value="OUTROS">OUTROS</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Mensagem (Opcional)</label>
            <textarea 
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
              placeholder="Descreva brevemente sua necessidade..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <div className="pt-2 flex gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="flex-1 px-4 py-3 rounded-xl bg-primary text-white font-bold hover:bg-cyan-700 transition-colors shadow-lg shadow-primary/30"
            >
              Enviar Solicitação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-white">
          Adquira nossos <span className="text-cyan-600 dark:text-cyan-400">serviços</span>
        </h2>
        <div className="inline-block bg-cyan-500 h-1 w-24 mt-3 rounded mb-12"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl p-8 text-center flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-cyan-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <span className="material-icons-outlined text-5xl text-cyan-500">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Soluções profissionais e garantidas</p>
              
              <button 
                onClick={() => handleOpenModal(service.title)}
                className="mt-auto w-full bg-slate-50 dark:bg-slate-700 text-primary dark:text-cyan-400 border border-primary/20 dark:border-cyan-400/20 font-bold py-3 px-6 rounded-xl hover:bg-primary hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-300 shadow-sm"
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialService={selectedService} 
      />
    </section>
  );
};

export default Services;