import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Empresa XYZ',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7_Mg-gxJA20ENlr1zbG6zHW7AOHGVULE0dIF00kSFdgT9odIUFTUAlMyoYYmf4v9zFYerQeH-yAH_JD0EEgOKcx4NKg3i1Fv1icXLl4ktYlDqsEOt6NvCui9UL402KNY3PTX7dtUgxAgWp1wvJSDpNkYUOU5CZ4_vNKJSrSLkz_sED9K94n5YbuKORMwbm2EnO4ziKkwVFDNI2O8xm3vo5_yg9DTC7N4kEJCed2tvtYqv3IlIB2FZMvhz_X6PmqP7SvwYcug6gyoJ',
    rating: 5,
    text: '"O serviço de instalação foi impecável! A equipe da Climatec foi profissional, rápida e muito atenciosa. Meu escritório ficou muito mais confortável."'
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    role: 'Residencial',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGTWMx3pkdVZixUQi9MUwIJg7_2_zEJQpxQj2XGpWBIHYsBwWa56waeCgEGqE4-GlC2-mCXE8_xCZCtKaRg36GD8i9eZITdi2kPBDvuJ_DeUb_pml0KaPc6_K7XJty3jtF5nMykAogaLsIz_DqsV_bfP07Fr1eLHUAUdqkD8yPbVH0MspZ9CAV7Z6d0eD9RmUt2E0e9Lut395S_cY3mfsyfNRxeSZf0rQLqiuoEtYssTE0LEHfPhWfeO4uEYJHUrYuRSNrnY-dXXVx',
    rating: 4.5,
    text: '"Comprei um climatizador portátil e estou amando. A entrega foi super rápida e o produto superou minhas expectativas. Recomendo a todos!"'
  },
  {
    id: 3,
    name: 'Pedro Santos',
    role: 'Indústria ABC',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDofKT0DaorwNBT2JK2TEC3aZznSSvVHvxhBsWtOuR-L9vJ2OEctxZSK6D8erwKaB55OhKAUIZPoof_XtwYp-YiNiR6Bhc-NHVNwAByyEEVT5Vf6Wt58bIE5lAKsPLfpCa6q5BhUWSoaNf7SceZ9LrVrBY9OkJHD8-fhKwqhR9sO-cBohGgUHo4NBhSXDgO7qEIKpUnJCOm3jNROfRJdCLru9eQLAks5Fx9ffROOMTc2oGUiMv9vEHIQjbbDUo3il8wQ821CFzgpDAE',
    rating: 5,
    text: '"Contratamos o serviço de manutenção para os equipamentos da nossa fábrica. A equipe técnica é excelente e muito competente. Estamos muito satisfeitos."'
  }
];

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`star-${i}`} className="material-icons-outlined text-lg">star</span>);
  }
  if (hasHalfStar) {
    stars.push(<span key="star-half" className="material-icons-outlined text-lg">star_half</span>);
  }
  // Fill remaining up to 5 with empty stars if needed, though UI usually just shows active ones
  while(stars.length < 5) {
      stars.push(<span key={`star-empty-${stars.length}`} className="material-icons-outlined text-lg text-gray-300">star_border</span>);
  }
  
  return stars;
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-cyan-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary dark:text-white">
            O que nossos <span className="text-cyan-600 dark:text-cyan-400">clientes dizem</span>
          </h2>
          <div className="inline-block bg-cyan-500 h-1 w-24 mt-3 rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((item, index) => {
             // Center card emphasis logic (optional, same as products)
             const isCenter = index === 1;
             const scaleClass = isCenter 
               ? "md:scale-100 md:opacity-100 shadow-xl" 
               : "md:scale-95 md:opacity-80 hover:opacity-100 hover:scale-100 hover:shadow-xl";

             return (
              <div key={item.id} className={`bg-white dark:bg-gray-900 rounded-lg p-8 flex-none w-full md:w-80 lg:w-96 flex flex-col items-center text-center transition-all duration-300 ease-in-out ${scaleClass}`}>
                <img 
                  alt={`Foto do cliente ${item.name}`} 
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-cyan-50 dark:border-gray-700" 
                  src={item.avatar} 
                />
                <h3 className="text-xl font-bold text-primary dark:text-cyan-400">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.role}</p>
                
                <div className="flex text-yellow-400 mb-4 gap-1">
                  {renderStars(item.rating)}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  {item.text}
                </p>
              </div>
             );
          })}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          <button className="w-3 h-3 bg-primary rounded-full"></button>
          <button className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></button>
          <button className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;