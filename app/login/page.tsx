// pages/login.tsx
"use client";
import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Login Data Submitted:', formData);
        // Here, you would typically send the data to your backend API for authentication.
        router.push('/dashboard');
    };

    return (
        <>

            {/* Main container with a vibrant background. */}
            <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-green-400 to-lime-600">
                <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 hover:scale-105">

                    {/* Back button */}
                    <Link href="/">
                        <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            ย้อนกลับ
                        </button>
                    </Link>

                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
                        Login
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล์</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-700"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-700"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            Login
                        </button>
                    </form>

                    {/* Registration Link */}
                    <p className="mt-8 text-center text-sm text-gray-600">
                        {"Don't have an account? "}
                        <Link href="/register" className="font-medium text-green-600 hover:text-green-500">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;