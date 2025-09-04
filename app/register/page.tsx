// pages/register.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gender: 'Male', // Default value
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    console.log('Image Preview URL:', previewImage);
    // Here you would typically send data to an API
  };

  return (
    <>
      <Head>
        <title>Register - Food Tracker</title>
      </Head>

      {/* Main container with a vibrant background */}
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-teal-400 to-blue-600">
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
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Input */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">ชื่อ-สกุล</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm  focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล์</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm  focus:ring-blue-500 focus:border-blue-500 text-gray-900"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm  focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Gender Select */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">เพศ</label>
              <select
                name="gender"
                id="gender"
                className="mt-1 block w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm  focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Image Upload and Preview */}
            <div>
              <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">รูปโปรไฟล์</label>
              <label
                htmlFor="imageUpload"
                className="cursor-pointer inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
              >
                เลือกรูป
              </label>
              <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {previewImage && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">ตัวอย่างรูป:</p>
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 text-gray-900">
                    <Image
                      src={previewImage}
                      alt="Profile Preview"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              ลงทะเบียน
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login">Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
