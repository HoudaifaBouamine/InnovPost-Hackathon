"use client"
import React from 'react';
import { Button } from '@/components/ui/button';

interface SignButtonProps {
    OnClickHandler: () => void;
    content: string;
    color: string;
    backgroundColor: string;
}

const SignButton: React.FC<SignButtonProps> = ({ content,color,backgroundColor,OnClickHandler }) => {
    return (
        <Button onClick={OnClickHandler} className={`text-${color} bg-${backgroundColor} border-primary text-2xl border-2 buttons`}>
            {content}
        </Button>
    );
};

export default SignButton;