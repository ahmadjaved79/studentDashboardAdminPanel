
import React, { useState } from "react";

const ViewResults = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openSemester, setOpenSemester] = useState(null); // State to toggle semester details

  const handleFetchResults = async () => {
    if (!enrollmentNumber) {
      setErrorMessage("Please enter an enrollment number.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://studentdashboard-7vmj.onrender.com/api/student/result/${enrollmentNumber}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data.result.semesters.sgpa)

      if (response.ok) {
        setStudentData(data.result);
      } else {
        setErrorMessage(data.message || "Failed to fetch results.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while fetching results.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSemesterDetails = (semesterIndex) => {
    if (openSemester === semesterIndex) {
      setOpenSemester(null); // Close the semester details if already open
    } else {
      setOpenSemester(semesterIndex); // Open the clicked semester details
    }
  };

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h2 className="text-2xl font-serif font-bold mb-6 text-center text-green-950">View Results</h2>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={enrollmentNumber}
          onChange={(e) => setEnrollmentNumber(e.target.value)}
          placeholder="Enter Enrollment Number"
          className="p-2 border border-green-900 rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-green-950"
        />
        <button
          onClick={handleFetchResults}
          className="ml-4 bg-blue-900 font-serif font-bold text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>

      {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

      {studentData && (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-950 ">Student Details</h3>
          <div className="mb-4">
            <div className="font-bold text-xl  font-serif text-gray-950">Enrollment Number: {studentData.enrollmentNumber}</div>
            <div className="font-bold text-xl font-serif text-gray-950">Student Name: {studentData.studentName}</div>
          </div>

          <div className="space-y-4">
            {studentData.semesters.map((semesterData, index) => (
              <div key={index} className="border border-green-900 p-4 rounded-md">
                <div
                  className="cursor-pointer font-serif text-xl  text-green-950 font-bold hover:underline"
                  onClick={() => toggleSemesterDetails(index)}
                >
                  Semester:- {semesterData.semester}
                </div>
                {openSemester === index && (
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <div className="font-bold font-mono  border-green-900 text-green-950">SGPA: {semesterData.sgpa}</div>
                      <div className="font-bold font-mono  border-green-900 text-green-950">CGPA: {semesterData.cgpa}</div>
                      

                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="font-bold font-mono  border-green-900 text-green-950">Current Backlogs: {semesterData.backlogs}</div>
                      <div className="font-bold font-mono  border-green-900 text-green-950">Total Backlogs: {studentData.totalBacklogs}</div>
                      <div className="font-bold font-mono  border-green-900 text-green-950">Status: {semesterData.status}</div>
                    </div>
                    <table className="min-w-full table-auto border-collapse border border-green-300">
                      <thead>
                        <tr className="bg-green-800 ">
                          <th className="border border-green px-4 py-2 text-white">Subject Code</th>
                          <th className="border border-green px-4 py-2 text-white">Subject</th>
                          <th className="border border-green  px-4 py-2 text-white">Internal</th>
                          <th className="border border-green px-4 py-2 text-white">Credits</th>
                          <th className="border border-green px-4 py-2 text-white">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {semesterData.subjects.map((subject, idx) => (
                          <tr key={idx}>
                            <td className="border border-green px-4 py-2 font-bold">{subject.subjectCode}</td>
                            <td className="border border-green px-4 py-2  font-bold">{subject.name}</td>
                            <td className="border border-green px-4 py-2  font-bold">{subject.internal}</td>
                            <td className="border border-green px-4  font-bold">{subject.credits}</td>
                            <td className="border border-green py-950 px-4  font-bold">{subject.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewResults;



