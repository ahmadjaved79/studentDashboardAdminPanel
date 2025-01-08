import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Routes = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 transform bg-gray-800 text-white p-4 transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative md:w-64`}
        >
          <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
          <nav className="space-y-4">
            <Link to="/" className="block hover:bg-gray-700 p-2 rounded-md">
              Dashboard
            </Link>
            <Link to="/add-results" className="block hover:bg-gray-700 p-2 rounded-md">
              Add Results
            </Link>
            <Link to="/view-results" className="block hover:bg-gray-700 p-2 rounded-md">
              View Results
            </Link>
            <Link to="/update-results" className="block hover:bg-gray-700 p-2 rounded-md">
              Update Results
            </Link>
            <Link to="/delete-results" className="block hover:bg-gray-700 p-2 rounded-md">
              Delete Results
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-64">
          {/* Mobile Menu Button */}
          <button
            className="absolute top-4 left-4 z-50 md:hidden bg-gray-800 text-white p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
          <div className="p-6">
            {/* Replace with your main content */}
            <h2 className="text-2xl font-bold">Welcome to the Admin Panel</h2>
            <p className="mt-4">This is your main content area.</p>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </Router>
  );
};

export default Routes;
