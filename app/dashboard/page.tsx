// pages/dashboard.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


// Mock Data for demonstration
const banner = "https://cdn.pixabay.com/photo/2016/07/11/03/23/chicken-rice-1508984_1280.jpg"
const mockFoods = [
    { id: 1, date: '2023-10-26', image: banner, name: 'สเต็กไก่', meal: 'มื้อเย็น' },
    { id: 2, date: '2023-10-26', image: banner, name: 'สลัดผัก', meal: 'มื้อกลางวัน' },
    { id: 3, date: '2023-10-25', image: banner, name: 'ข้าวผัดกุ้ง', meal: 'มื้อเย็น' },
    { id: 4, date: '2023-10-25', image: banner, name: 'แซนวิชไส้กรอก', meal: 'มื้อเช้า' },
    { id: 5, date: '2023-10-24', image: banner, name: 'ซุปมิโซะ', meal: 'มื้อเย็น' },
    { id: 6, date: '2023-10-24', image: banner, name: 'พาสต้าคาโบนาร่า', meal: 'มื้อกลางวัน' },
    { id: 7, date: '2023-10-23', image: banner, name: 'แกงเขียวหวานไก่', meal: 'มื้อเย็น' },
    { id: 8, date: '2023-10-23', image: banner, name: 'โจ๊กหมู', meal: 'มื้อเช้า' },
    { id: 9, date: '2023-10-22', image: banner, name: 'ก๋วยเตี๋ยว', meal: 'มื้อกลางวัน' },
    { id: 10, date: '2023-10-22', image: banner, name: 'ข้าวขาหมู', meal: 'มื้อเย็น' },
    { id: 11, date: '2023-10-21', image: banner, name: 'ต้มยำกุ้ง', meal: 'มื้อเย็น' },
    { id: 12, date: '2023-10-21', image: banner, name: 'ไข่เจียว', meal: 'มื้อเช้า' },
];

const DashboardPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 5;

    const router = useRouter();

    // Mock User Data
    const user = { fullName: 'สมชาย รักสุขภาพ' };

    // Filter and paginate the food data
    const filteredFoods = mockFoods.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentFoods = filteredFoods.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentPage(1); // Reset to first page on new search
    };

    const handleDelete = (id: number) => {
        console.log(`Deleting food item with ID: ${id}`);
        alert(`Deleting food item with ID: ${id}`);
    };

    const handleEdit = (id: number) => {
        console.log(`Editing food item with ID: ${id}`);
        alert(`Editing food item with ID: ${id}`);
    };

    const handleLogout = () => {
        router.push('/');
        // In a real application, this would clear the user's session/token and redirect to the login page.
        // e.g., router.push('/login');
    };

    return (
        <>
            <div className="min-h-screen p-4 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">

                {/* User Info, Logout & Profile Buttons */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-gray-700 font-semibold text-lg text-center md:text-left">
                        <span className="text-sm font-normal">Welcome,</span> {user.fullName}
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/profile">
                            <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-200">
                                Profile
                            </button>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Main Controls: Back, Dashboard Title, Add Food */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <Link href="/">
                        <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            ย้อนกลับ
                        </button>
                    </Link>
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center md:text-left">
                        Food Dashboard
                    </h1>
                    <Link href="/addfood">
                        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200">
                            + Add Food
                        </button>
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <input
                            type="text"
                            placeholder="ค้นหาชื่ออาหาร..."
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-purple-700 transition-colors duration-200"
                        >
                            ค้นหา
                        </button>
                    </form>
                </div>

                {/* Food List Table */}
                <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    วันที่
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    รูปอาหาร
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ชื่ออาหาร
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    มื้ออาหาร
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    จัดการ
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentFoods.length > 0 ? (
                                currentFoods.map((food) => (
                                    <tr key={food.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{food.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <Image
                                                src={food.image}
                                                alt={food.name}
                                                width={100}
                                                height={100}
                                                className="rounded-full object-cover w-15 h-15 mr-2 inline-block align-middle border border-2 border-gray-700"
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{food.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{food.meal}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button
                                                onClick={() => handleEdit(food.id)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                            >
                                                แก้ไข
                                            </button>
                                            <button
                                                onClick={() => handleDelete(food.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                ลบ
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                                        ไม่พบรายการอาหารที่ค้นหา
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-6 flex justify-center items-center space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 border rounded-lg bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-4 py-2 border rounded-lg ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 border rounded-lg bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default DashboardPage;