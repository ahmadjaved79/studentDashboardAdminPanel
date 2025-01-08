

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddResults from "./components/AddResults";
import ViewResults from "./components/ViewResults";
import UpdateResults from "./components/UpdateResults";
import DeleteResults from "./components/DeleteResults";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0  left z-50 bg-green-950 text-white p-4 h-full transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-[20vw]`}
        >
          {/* Admin Panel Logo */}
            <div className="flex items-center mb-6 mt-[10vh]">
            <h1 className="text-[40px] font-bold text-yellow-500">Admin Panel</h1>
          </div>

          <nav className="space-y-5">
            <Link
              to="/"
              className="block  hover:bg-green-900 text-slate-400 text-xl p-3 rounded-md font-bold font-mono"
              onClick={() => setIsSidebarOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/add-results"
              className="block text-slate-400 text-xl hover:bg-green-900   p-3 rounded-md  font-bold font-mono"
              onClick={() => setIsSidebarOpen(false)}
            >
              Add Results
            </Link>
            <Link
              to="/view-results"
              className="block text-slate-400 text-xl hover:bg-green-900  p-3 rounded-md  font-bold font-mono"
              onClick={() => setIsSidebarOpen(false)}
            >
              View Results
            </Link>
            <Link
              to="/update-results"
              className="block text-slate-400 text-xl hover:bg-green-900  p-3 rounded-md  font-bold font-mono"
              onClick={() => setIsSidebarOpen(false)}
            >
              Update Results
            </Link>
            <Link
              to="/delete-results"
              className="block text-slate-400 text-xl hover:bg-green-900  p-3 rounded-md  font-bold font-mono"
              onClick={() => setIsSidebarOpen(false)}
            >
              Delete Results
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="absolute top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Main Content */}
        <div className="flex-1 bg-gray-400 p-6 lg:ml-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-results" element={<AddResults />} />
            <Route path="/view-results" element={<ViewResults />} />
            <Route path="/update-results" element={<UpdateResults />} />
            <Route path="/delete-results" element={<DeleteResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
