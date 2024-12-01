"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl = 'https://treefrog-willing-neatly.ngrok-free.app/api/auth/login?useCookies=true';
    const payload = { email, password };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        window.location.href = '/protected';
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Error: ${errorData.message || 'Login failed'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col sm:flex-row w-full items-center sm:items-stretch rounded-lg sm:rounded-none sm:w-auto">
        <div className="hidden md:flex flex-1 bg-[#F2F2F2E5] rounded-l-lg items-center justify-center">
          <Card className="h-full shadow-none">
            <CardHeader className="pt-10">
              <Image src="/Logo.svg" alt="Logo" width={80} height={95} />
            </CardHeader>
            <CardContent className="flex-1">
              <h2 className="text-xl font-bold text-center text-text">
                Bienvenue 👋
              </h2>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center w-full max-w-md bg-white rounded-lg shadow sm:rounded-r-lg sm:shadow-none text-text">
          <Card className="w-full">
            <CardHeader>
              <h2 className=" text-xl font-bold text-center">Connexion</h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 text-white">
                  Login
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p>
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-500 font-medium">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
