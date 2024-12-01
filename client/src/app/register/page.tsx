// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { useForm } from "react-hook-form";
// import * as z from "zod";

// // import { Button, Card, CardContent, CardHeader, Input, Label, Textarea } from "shadcn-ui";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// // import { CardHeader } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// const schema = z.object({
//   fullName: z.string().nonempty("Full name is required"),

//   password: z.string().nonempty("Password is required"),

//   address: z.string().nonempty("Address is required"),

//   phoneNumber: z.string().nonempty("Phone number is required"),

//   email: z.string().email("Invalid email address"),

//   nin: z.string().nonempty("NIN is required"),
// });

// const RegistrationForm = () => {
//   const {
//     register,

//     handleSubmit,

//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     // Handle form submission

//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Card>
//         <CardHeader className="flex justify-between items-center">
//           <h2 className="text-lg font-medium">User Registration</h2>

//           <div className="flex items-center gap-2">
//             <Button variant="outline">Back</Button>

//             <Button type="submit">Submit</Button>
//           </div>
//         </CardHeader>

//         <CardContent>
//           <div className="space-y-4">
//             <div>
//               <Label htmlFor="fullName">Full Name</Label>

//               <Input
//                 id="fullName"
//                 type="text"
//                 placeholder="Enter your full name"
//                 {...register("fullName")}
//               />

//               {errors.fullName && (
//                 <p className="text-red-500 text-sm">
//                   {errors.fullName.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <Label htmlFor="password">Password</Label>

//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 {...register("password")}
//               />

//               {errors.password && (
//                 <p className="text-red-500 text-sm">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <Label htmlFor="address">Address</Label>

//               <Textarea
//                 id="address"
//                 placeholder="Enter your address"
//                 {...register("address")}
//               />

//               {errors.address && (
//                 <p className="text-red-500 text-sm">{errors.address.message}</p>
//               )}
//             </div>

//             <div>
//               <Label htmlFor="phoneNumber">Phone Number</Label>

//               <Input
//                 id="phoneNumber"
//                 type="text"
//                 placeholder="Enter your phone number"
//                 {...register("phoneNumber")}
//               />

//               {errors.phoneNumber && (
//                 <p className="text-red-500 text-sm">
//                   {errors.phoneNumber.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <Label htmlFor="email">Email</Label>

//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 {...register("email")}
//               />

//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email.message}</p>
//               )}
//             </div>

//             <div>
//               <Label htmlFor="nin">NIN</Label>

//               <Input
//                 id="nin"
//                 type="text"
//                 placeholder="Enter your NIN"
//                 {...register("nin")}
//               />

//               {errors.nin && (
//                 <p className="text-red-500 text-sm">{errors.nin.message}</p>
//               )}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </form>
//   );
// };

// export default RegistrationForm;
'use client';

import Link from 'next/link';
import { Form } from '../form';
import { redirect } from 'next/navigation';
import { SubmitButton } from '../submit-button';

export default function Register() {
  async function register(formData: FormData) {
    const fullName = formData.get('fullName') as string;
    const nin = formData.get('nin') as string;
    const password = formData.get('password') as string;
    const address = formData.get('address') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;

    const apiUrl = 'https://treefrog-willing-neatly.ngrok-free.app/api/auth/register';
    const payload = { fullName, nin, password, address, phone, email };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('User registered successfully');
        redirect('/login');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        console.error(`Error: ${errorData.message || 'Registration failed'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      console.error('An unexpected error occurred');
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form action={register}>
          <div className="px-4 py-6 space-y-4">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              required
            />
            <input
              name="nin"
              type="text"
              placeholder="NIN"
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              required
            />
            <input
              name="address"
              type="text"
              placeholder="Address"
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              required
            />
          </div>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <Link href="/login" className="font-semibold text-gray-800">
              Sign in
            </Link>
            {' instead.'}
          </p>
        </Form>
      </div>
    </div>
  );
}
