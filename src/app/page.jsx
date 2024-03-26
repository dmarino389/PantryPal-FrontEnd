import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <a href="/pantry" className="text-blue-500 hover:text-blue-700 mb-4">Ingredients</a>
      <a href="/searchrecipe" className="text-blue-500 hover:text-blue-700 mb-4">Search Recipe</a>
      <a href="/login" className="text-blue-500 hover:text-blue-700 mb-4">Login</a>
      <a href="/register" className="text-blue-500 hover:text-blue-700 mb-4">Register</a>
      <a href="/account" className='text-blue-500 hover:text-blue-700 mb-4'>Account</a>
    </div>
  );
}
