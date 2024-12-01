import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {
  const cards = [
    { src: 'header1.svg', alt: 'Card Image 1', title: 'BARIDIMOB/WEB', subtitle: 'Pour enfin découvrir et profiter de ce nouveau service. Cliquez-ici !' },
    { src: 'header2.svg', alt: 'Card Image 2', title: 'WEB MARCHAND', subtitle: 'Payez vos factures, achetez vos billets et assurances etc... via la carte Edahabia. Cliquez-ici !' },
    { src: 'header3.svg', alt: 'Card Image 3', title: 'SITE ECCP', subtitle: 'Découvrez les nouveautés du site ECCP. Cliquez-Ici !' },
  ];

  return (
    <div className="flex my-8 flex-col min-h-screen">
      <div className="relative w-full h-96">
        <Image
          src="section.svg"
          alt="Description of image"
          layout="responsive"
          objectFit="cover"
          width={100}
          height={30}
        />
        <div className="inset-0 flex items-center justify-center w-full h-full">
          <div className="absolute pt-24 transform -translate-y-1/2 flex flex-row justify-around gap-4 px-16">
            {cards.map((card, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <div className="w-72 h-48 relative">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md w-auto"
                  />
                </div>
                <h3 className="mt-2 text-xl font-semibold text-black">{card.title}</h3>
                <p className='text-foreground'>{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Add more content here */}
    </div>
  );
};

export default HomePage;
