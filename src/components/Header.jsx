import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">My Website</div>
      <div className="flex items-center">
        <img src="path_to_user_image" alt="User" className="w-10 h-10 rounded-full mr-4" />
        <div className="text-right mr-4">
          <span className="block font-bold">John Doe</span>
          <span className="block text-sm">ID: 12345</span>
        </div>
        <button className="ml-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded">Change Language</button>
        <button className="ml-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded">Logout</button>
      </div>
    </header>
  );
}

export default Header;
