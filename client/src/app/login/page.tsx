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
