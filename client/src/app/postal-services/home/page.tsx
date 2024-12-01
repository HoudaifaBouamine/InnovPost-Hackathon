import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {
    return (
        <div>
            <Image src="photo.svg" alt="log" width={100} height={30}/>

        </div>
    );
};

export default HomePage;