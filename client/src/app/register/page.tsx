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
