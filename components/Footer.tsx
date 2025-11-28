import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary text-white scroll-mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <a className="flex items-center gap-3 mb-4" href="#">
              <div className="bg-white text-primary p-2 rounded-full">
                <span className="material-icons-outlined">ac_unit</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">CLIMATEC</span>
                <p className="text-xs tracking-wider text-cyan-200">AR CONDICIONADO</p>
              </div>
            </a>
            <div className="flex text-yellow-400 gap-1">
              <span className="material-icons-outlined text-lg">star</span>
              <span className="material-icons-outlined text-lg">star</span>
              <span className="material-icons-outlined text-lg">star</span>
              <span className="material-icons-outlined text-lg">star</span>
              <span className="material-icons-outlined text-lg">star</span>
            </div>
          </div>

          {/* Social/Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-300">ENTRE EM CONTATO</h4>
            <div className="flex space-x-3">
              <a className="bg-cyan-500 hover:bg-cyan-400 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors" href="#">
                <span className="material-icons-outlined">facebook</span>
              </a>
              <a className="bg-cyan-500 hover:bg-cyan-400 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors" href="#">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M12.315 2c-4.433 0-6.042.015-8.15.118c-2.106.103-3.585.51-4.88 1.805C-.996 5.195-.59 6.674-.486 8.78c-.103 2.108-.118 3.717-.118 8.15s.015 6.042.118 8.15c.103 2.106.51 3.585 1.805 4.88c1.295 1.295 2.774.694 4.88.59C8.955 21.985 10.564 22 15.002 22s6.042-.015 8.15-.118c2.106-.103 3.585-.51 4.88-1.805c1.295-1.295.694-2.774.59-4.88c.103-2.108.118-3.717.118-8.15s-.015-6.042-.118-8.15c-.103-2.106-.51-3.585-1.805-4.88c-1.295-1.295-2.774-.694-4.88-.59C15.045 2.015 13.436 2 8.998 2h3.317zm-1.812 4.414c-3.138 0-5.682 2.544-5.682 5.682s2.544 5.682 5.682 5.682s5.682-2.544 5.682-5.682s-2.544-5.682-5.682-5.682zm0 9.368c-2.034 0-3.686-1.652-3.686-3.686s1.652-3.686 3.686-3.686s3.686 1.652 3.686 3.686s-1.652 3.686-3.686-3.686zm4.656-7.39c-.777 0-1.407.63-1.407 1.407s.63 1.407 1.407 1.407s1.407-.63 1.407-1.407s-.63-1.407-1.407-1.407z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a className="bg-cyan-500 hover:bg-cyan-400 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors" href="#">
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.6 14.2l-1.5-1.5-3.1 3.1 2.3 2.3-1.4 1.4-2.3-2.3-3.1 3.1-1.5-1.5 3.1-3.1-6-6 3.1-3.1-1.5-1.5-3.1 3.1-2.3-2.3 1.4-1.4 2.3 2.3 3.1-3.1 1.5 1.5-3.1 3.1 6 6-3.1 3.1zm4.3-2.3c0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3c0 1.2.3 2.3.9 3.3l-4.2 4.2c-.6.6-.6 1.5 0 2.1s1.5.6 2.1 0l4.2-4.2c1 .6 2.1.9 3.3.9 3.5 0 6.3-2.8 6.3-6.3zm-2.1 0c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2 1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Info Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-300">INFORMAÇÕES</h4>
            <ul className="space-y-2 text-cyan-100">
              <li className="flex items-start gap-2">
                 <span className="material-icons-outlined text-sm mt-1">call</span>
                 (44) 99807-0706
              </li>
              <li className="flex items-start gap-2">
                 <span className="material-icons-outlined text-sm mt-1">location_on</span>
                 Avenida Brasil, 5194 A - Zona 04 Maringá PR - CEP 87014-0706
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-cyan-800 py-4 text-center text-sm text-cyan-200 border-t border-cyan-700">
        <div className="container mx-auto px-6">
          © 2024 | Big Bang Digital Studio | Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
