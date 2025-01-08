


import React, { useState } from "react";

const DeleteResults = () => {
  const [showPopup, setShowPopup] = useState(null); // "student" or "semester"
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [semester, setSemester] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle deleting student data
  const handleDeleteStudent = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://studentdashboard-7vmj.onrender.com/api/student/result/delete/student",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ enrollmentNumber }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Student data deleted successfully!");
      } else {
        setSuccessMessage(data.message || "Failed to delete student data.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred while deleting student data.");
    } finally {
      setIsLoading(false);
      setShowPopup(null);
      setEnrollmentNumber("");
    }
  };

  // Handle deleting semester data
  const handleDeleteSemester = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://studentdashboard-7vmj.onrender.com/api/student/result/delete/semester",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ enrollmentNumber, semester: Number(semester) }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Semester data deleted successfully!");
      } else {
        setSuccessMessage(data.message || "Failed to delete semester data.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred while deleting semester data.");
    } finally {
      setIsLoading(false);
      setShowPopup(null);
      setEnrollmentNumber("");
      setSemester("");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-serif font-bold mb-6 text-center mt-[15vh]">Delete Results</h2>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
        {/* Delete Student Button */}
        <button
          onClick={() => setShowPopup("student")}
          className="bg-red-950 font-serif text-white py-2 px-4 rounded-md hover:bg-red-800 w-full sm:w-auto"
        >
          Delete Student Data
        </button>

        {/* Delete Semester Button */}
        <button
          onClick={() => setShowPopup("semester")}
          className="bg-blue-950 font-serif text-white py-2 px-4 rounded-md hover:bg-blue-800 w-full sm:w-auto"
        >
          Delete Semester Data
        </button>
      </div>

      {/* Popup for Deletion */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-md shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            {showPopup === "student" && (
              <>
                <h3 className="text-xl font-bold mb-4 text-center font-serif">
                  Delete Student Data
                </h3>
                <input
                  type="text"
                  value={enrollmentNumber}
                  onChange={(e) => setEnrollmentNumber(e.target.value)}
                  placeholder="Enter Enrollment Number"
                  className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <div className="flex space-x-4 justify-center">
                  <button
                    onClick={handleDeleteStudent}
                    className={`py-2 px-4 text-white rounded-md ${
                      isLoading
                        ? "bg-gray-800 cursor-not-allowed"
                        : "bg-red-950 hover:bg-red-800"
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Deleting..." : "Delete"}
                  </button>
                  <button
                    onClick={() => setShowPopup(null)}
                    className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}

            {showPopup === "semester" && (
              <>
                <h3 className="text-xl font-bold mb-4 text-center font-serif">
                  Delete Semester Data
                </h3>
                <input
                  type="text"
                  value={enrollmentNumber}
                  onChange={(e) => setEnrollmentNumber(e.target.value)}
                  placeholder="Enter Enrollment Number"
                  className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-950"
                />
                <input
                  type="text"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  placeholder="Enter Semester Number"
                  className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-950"
                />
                <div className="flex space-x-4 justify-center">
                  <button
                    onClick={handleDeleteSemester}
                    className={`py-2 px-4 text-white rounded-md ${
                      isLoading
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-blue-950 hover:bg-blue-800"
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Deleting..." : "Delete"}
                  </button>
                  <button
                    onClick={() => setShowPopup(null)}
                    className="py-2 px-4 bg-gray-950 text-white rounded-md hover:bg-gray-800"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className="text-green-950 text-lg">{successMessage}</p>
            <button
              onClick={() => setSuccessMessage("")}
              className="mt-4 py-2 px-4 bg-gray-950 text-white rounded-md hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteResults;
