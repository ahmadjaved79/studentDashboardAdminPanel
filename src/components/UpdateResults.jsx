import React, { useState } from "react";

const UpdateResults = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [semester, setSemester] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [newGrade, setNewGrade] = useState("");
  const [newCredits, setNewCredits] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    try {
      const response = await fetch(
        `https://studentdashboard-7vmj.onrender.com/api/student/result/${enrollmentNumber}/${semester}/backlog`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subjectName,
            newGrade,
            newCredits,
          }),
        }
      );

      if (response.ok) {
        setMessage("Result updated successfully!");
        setEnrollmentNumber("");
        setSemester("");
        setSubjectName("");
        setNewGrade("");
        setNewCredits("");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to update results.");
      }
    } catch (error) {
      setMessage("An error occurred while updating results.");
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className="p-6 min-h-full">
      <h2 className="text-2xl font-bold font-serif text-green-950 mb-6 text-center">Update Results</h2>

      <form onSubmit={handleSubmit} className="space-y-6  border-yellow-500 rounded-lg bg-gray-300 p-5 border-spacing-5as mt-[2vh]">
        {/* Enrollment Number and Semester */}
        <div>
          <label className="block text-md font-mono font-bold text-gray-950 ">Enrollment Number</label>
          <input
            type="text"
            value={enrollmentNumber}
            onChange={(e) => setEnrollmentNumber(e.target.value)}
            className="mt-1 block w-full p-2 border border-green-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-950"
            placeholder="Enter enrollment number"
            required
          />
        </div>
        <div>
          <label className="block text-md font-mono font-bold text-gray-950">Semester</label>
          <input
            type="text"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="mt-1 block w-full p-2 border border-green-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-950"
            placeholder="Enter semester"
            required
          />
        </div>

        {/* Update Fields */}
        <div>
          <label className="block text-md font-mono font-bold text-gray-950">Subject Name</label>
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-950"
            placeholder="Enter subject name"
            required
          />
        </div>
        <div>
          <label className="block text-md font-mono font-bold text-gray-950">New Grade</label>
          <input
            type="text"
            value={newGrade}
            onChange={(e) => setNewGrade(e.target.value)}
            className="mt-1 block w-full p-2 border border-green-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-950"
            placeholder="Enter new grade"
            required
          />
        </div>
        <div>
          <label className="block text-md font-mono font-bold text-gray-950">New Credits</label>
          <input
            type="number"
            value={newCredits}
            onChange={(e) => setNewCredits(e.target.value)}
            className="mt-1 block w-full p-2 border border-green-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-950"
            placeholder="Enter new credits"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className={`py-2 px-4 rounded-md text-white transition duration-200 ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-green-950 hover:bg-green-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Results"}
          </button>
        </div>
      </form>

      {/* Message Display */}
      {message && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md text-center text-blue-600">
          {message}
        </div>
      )}
    </div>
  );
};

export default UpdateResults;
