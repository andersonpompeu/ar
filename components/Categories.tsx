import React from 'react';

const Categories: React.FC = () => {
  const items = [
    { 
      label: 'Residencial', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ2MJ4VXbLHRsvSh5-LPk5YBFIUr-xWFgXLaJVdA-FOaP6s-0jD6Ctp43yW21gbPIa9TpLiofKpthDCmWbpbdcyMBSGd7Bef3JK8ey5_AbzCCrJNPJnFvwu1jDER8IZREHhfYICFR3RYpWT9PKNJPurke_NpKBQtz0_nGFXoPJwxSkkLIoqsuWcWZW_0WnBedcVm7Nj1Pl3KDxOyNQwQmvfNy64O7_zLnHjtqoj3aaU3AfwrcWVHwzzT8uvSjALTtQDgAJtNe7GYlO',
      height: 'h-24'
    },
    { 
      label: 'Industrial', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3R1x871gtUmEV2Q9_RxYL6dgpRgASMaZRb1rrrUZ756126L8bKTcG7465yJKZ_vCR9qUxhbfk2WHrqnAzu-HvexFH5ISQU5JhvcwJt2X0bAKwj2II37xH2reVppUppwpBnvOZmMoNEgnE5TQHIcz_XQf59tsuwZdXoW_jpI8DQiHF0EVgxQA_LBhQD09AaHC9n-vd7rm1jy8lMhm9lEP3hNdTxG09vrVU4XzKC1NfjWCe-Mh-9e5dRNyHRFrQ4CVJnebZmvscXzMP',
      height: 'h-24'
    },
    { 
      label: 'Comercial', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-YA4y8pdx0ktMFOtpWglzVsxPrTiLUlrPaDTP80tCandvSD-grTLmEqiPS7AYvIjk0FBy1gDje4jn6bb_S7wecAQroPpjB6giktItX_vLnuizFZQDLeiE6CIGwkY3to6nk4C1qrDqkofFsM1hQ2OOU6msbq_3ThLtXEHnTbhlTpjdRZyNf3xM6FTTMOGqzZSNVrJ6zUAgIIGji_GjcX8Fpif8_9hoDmhcHyw_WgIZcaSNK_9VyQSUWDvLsEvHuv0F4jUU_ChRZT7H',
      height: 'h-24'
    },
    { 
      label: 'Ar-Condicionado', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo7phNW2e4izNS_MHuur0N52-7zzDulXJv5Y3nB02g2huGAxXgsv4FKsddjRIEf5Jfebh3JMcHWjg8xXbPZU6a7oz2ExmqRjAZNZiCjqq107Gx1moZ6Al7pedGqOMJt0ZIhFxrwEwS5fmMAHpZS8jk6HeaqP6-SHP85OByPTa146YoBbZUahvx8j1MR9TlCPBl5M0WRAt1-nkHztxZFSQxuZzJ-kopw6foq6A1ofcIoHaevH7up52muxVyCXrSTqO3y0FLZQjBLHeI',
      height: 'h-16' // Slightly smaller image as per source visual
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-32 h-32 flex items-center justify-center bg-cyan-500 rounded-full mb-4 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 shadow-lg">
                <img 
                  alt={`${item.label} air cooler`} 
                  className={`${item.height} object-contain filter drop-shadow-md`} 
                  src={item.img} 
                />
              </div>
              <p className="font-bold text-lg text-gray-800 dark:text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;