// pages/addfood.tsx
"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent } from 'react';

const AddFoodPage = () => {
  const [formData, setFormData] = useState({
    foodName: '',
    meal: 'มื้อเช้า',
    date: '',
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Mock User Data
  const user = { fullName: 'สมชาย รักสุขภาพ' };

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
    console.log('Food Data Submitted:', { ...formData, image: previewImage });
    alert('บันทึกข้อมูลอาหารเรียบร้อยแล้ว!');
    // In a real app, you would send this data to an API
  };

  return (
    <>
      <Head>
        <title>Add Food - Food Tracker</title>
      </Head>

      <div className="min-h-screen p-4 bg-gradient-to-r from-yellow-300 to-orange-500">

        {/* Header Section: User Info & Profile Link */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-lg mb-6">
          <div className="text-gray-700 font-semibold">
            <span className="text-sm font-normal">Welcome,</span> {user.fullName}
          </div>
          <Link href="/profile">
            <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-200">
              Profile
            </button>
          </Link>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Link href="/dashboard">
            <button className="flex items-center text-gray-800 hover:text-gray-900 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              ย้อนกลับไป Dashboard
            </button>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto transform transition-all duration-300 hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            เพิ่มรายการอาหาร
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Food Name Input */}
            <div>
              <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">ชื่ออาหาร</label>
              <input
                type="text"
                name="foodName"
                id="foodName"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                value={formData.foodName}
                onChange={handleChange}
              />
            </div>

            {/* Meal Type Select */}
            <div>
              <label htmlFor="meal" className="block text-sm font-medium text-gray-700">มื้ออาหาร</label>
              <select
                name="meal"
                id="meal"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                value={formData.meal}
                onChange={handleChange}
              >
                <option>มื้อเช้า</option>
                <option>มื้อกลางวัน</option>
                <option>มื้อเย็น</option>
                <option>ของว่าง</option>
              </select>
            </div>

            {/* Date Input */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">วันที่</label>
              <input
                type="date"
                name="date"
                id="date"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            {/* Image Upload and Preview */}
            <div>
              <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">รูปอาหาร</label>
              <label
                htmlFor="imageUpload"
                className="cursor-pointer inline-block bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-200"
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
                  <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-gray-300">
                    <Image
                      src={previewImage}
                      alt="Food Preview"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-200"
            >
              บันทึก
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFoodPage;