// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import Image from "next/image";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       {/* Container for both cards */}
//       <div className="relative flex flex-col sm:flex-row w-full items-center sm:items-stretch rounded-lg sm:rounded-none sm:w-auto">
//         {/* First card (info card) */}
//         <div className="hidden md:flex flex-1 bg-[#F2F2F2E5] rounded-l-lg items-center justify-center">
//           <Card className="h-full shadow-none">
//             <CardHeader className="pt-10">
//               <Image src="/Logo.svg" alt="Logo" width={80} height={95} />
//             </CardHeader>
//             <CardContent className="flex-1">
//               <h2 className="text-xl font-bold text-center text-text">
//                 Bienvenue 👋
//               </h2>
//               {/* <p className="text-gray-600 text-center">
//                 sur le Portail des Demandes de Documents
//               </p> */}
//             </CardContent>
//           </Card>
//         </div>

//         {/* Second card (login form card) */}
//         <div className="flex justify-center items-center w-full max-w-md bg-white rounded-lg shadow sm:rounded-r-lg sm:shadow-none text-text">
//           <Card className="w-full">
//             <CardHeader>
//               <h2 className=" text-xl font-bold text-center">Connexion</h2>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your mail"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="password">Password</Label>
//                   <Input
//                     id="password"
//                     type="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <Button type="submit" className="w-full bg-blue-600 text-white">
//                   Login
//                 </Button>
//               </form>
//             </CardContent>
//             <CardFooter className="flex justify-center">
//               <p>
//                 Don&apos;t have an account?{" "}
//                 <Link href="/register" className="text-blue-500 font-medium">
//                   Sign up
//                 </Link>
//               </p>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
'use client';

import Link from 'next/link';
import { LoginForm } from './loginform';
import { SubmitButton } from '../submit-button';

export default function Login() {
  async function handleLogin(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const apiUrl = 'https://treefrog-willing-neatly.ngrok-free.app/api/auth/login?useCookies=true';
    const payload = { email, password };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Ensure Content-Type is application/json
          'Accept': 'application/json',        // Accept JSON response
        },
        body: JSON.stringify(payload),
        credentials: 'include', // To send cookies
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        window.location.href = '/protected'; // Redirect on successful login
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Error: ${errorData.message || 'Login failed'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        <LoginForm action={handleLogin}>
          <div className="px-4 py-6 space-y-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <SubmitButton>Sign in</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/register" className="font-semibold text-gray-800">
              Sign up
            </Link>
            {' for free.'}
          </p>
        </LoginForm>
      </div>
    </div>
  );
}
