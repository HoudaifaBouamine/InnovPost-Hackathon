import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {
  const cards = [
    { src: 'header1.svg', alt: 'Card Image 1', title: 'BARIDIMOB/WEB', subtitle: 'Pour enfin découvrir et profiter de ce nouveau service. Cliquez-ici !' },
    { src: 'header2.svg', alt: 'Card Image 2', title: 'WEB MARCHAND', subtitle: 'Payez vos factures, achetez vos billets et assurances etc... via la carte Edahabia. Cliquez-ici !' },
    { src: 'header3.svg', alt: 'Card Image 3', title: 'SITE ECCP', subtitle: 'Découvrez les nouveautés du site ECCP. Cliquez-Ici !' },
  ];
  const items=[{src:'t1.svg',title:"Special services"},{src:'t2.svg',title:"Corporate Services"},{src:'t3.svg',title:"Online Services"},]
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
        <div className="inset-0 flex items-center justify-center w-full h-full px-32">
          <div className="absolute pt-24  transform -translate-y-1/2 flex flex-row justify-around gap-4 px-16 mx-16">
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
      <div className='my-96'></div>
      <div className=' text-center '>
        <h1 className="text-4xl font-bold text-black my-8">Our Services</h1>
        <p className="text-center text-foreground">
          Algerian Postal Services is a postal service company in Algeria. It was established in 1999 and is headquartered in Algiers. The company offers a range of services including mail, parcel, and express delivery services. Algerian Postal Services is the largest postal service provider in Algeria and has a network of over 1,000 post offices across the country. The company is committed to providing reliable and efficient postal services to its customers and is constantly working to improve its services and expand its network.
        </p>
      </div>
    
    <div className="flex flex-row justify-around my-8">
      {items.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 w-72">
      <div className="w-16 h-16 mx-auto mb-4">
        <Image
          src={card.src}
          alt="Logo"
          layout="responsive"
          objectFit="contain"
          width={64}
          height={64}
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold text-black text-center">{card.title}</h3>
  
        </div>
      ))}
    </div>
    </div>

 
  );
};

export default HomePage;
