
import React, { useState } from "react";

const AddResults = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [semester, setSemester] = useState("");
  const [subjects, setSubjects] = useState([
    { subjectCode: "", name: "", internal: "", grade: "", credits: "" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubjectChange = (index, event) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][event.target.name] = event.target.value;
    setSubjects(updatedSubjects);
  };

  const handleAddSubject = () => {
    setSubjects([
      ...subjects,
      { subjectCode: "", name: "", internal: "", grade: "", credits: "" },
    ]);
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        // "https://studentdashboard-7vmj.onrender.com/api/student/result/",
        "http://localhost:8000/api/student/result/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            enrollmentNumber,
            studentName,
            semester,
            subjects,
          }),
        }
      );

      if (response.ok) {
        setSuccessMessage("Results added successfully!");
        setEnrollmentNumber("");
        setStudentName("");
        setSemester("");
        setSubjects([
          { subjectCode: "", name: "", internal: "", grade: "", credits: "" },
        ]);
      } else {
        setSuccessMessage("Failed to add results.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred while adding results.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-4 md:p-10 lg:p-0 bg-gray-400 min-h-full ">
      <h2 className="text-2xl font-serif text-green-950 font-bold mb-6 text-center">
        Add Results
      </h2>

      <form
  onSubmit={handleSubmit}
  className="space-y-6 overflow-x-auto overflow-y-auto h-[90vh] max-h-full w-full border-yellow-500 rounded-lg bg-gray-300 p-5 border-spacing-5"
>        {/* Form Inputs */}
        <div className="space-y-4 ">
          <div>
            <label className="block text-sm font-bold text-gray-700">
              Enrollment Number
            </label>
            <input
              type="text"
              value={enrollmentNumber}
              onChange={(e) => setEnrollmentNumber(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter enrollment number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter student name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700">
              Semester
            </label>
            <input
              type="text"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter semester"
              required
            />
          </div>
        </div>

        {/* Subjects */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-gray-700">Subjects</h3>
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 items-center"
            >
            
              <input
                type="text"
                name="subjectCode"
                value={subject.subjectCode}
                onChange={(e) => handleSubjectChange(index, e)}
                className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
                placeholder="SubjectCode"
                required
              />
              <input
                type="text"
                name="name"
                value={subject.name}
                onChange={(e) => handleSubjectChange(index, e)}
                className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
                placeholder="Name"
                required
              />
              <input
                type="number"
                name="internal"
                value={subject.internal}
                onChange={(e) => handleSubjectChange(index, e)}
                className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
                placeholder="Internal"
                required
              />
              <input
                type="text"
                name="grade"
                value={subject.grade}
                onChange={(e) => handleSubjectChange(index, e)}
                className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
                placeholder="Grade"
                required
              />
              <input
                type="number"
                name="credits"
                value={subject.credits}
                onChange={(e) => handleSubjectChange(index, e)}
                className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
                placeholder="Credits"
                required
              />
              <button
                type="button"
                onClick={() => handleRemoveSubject(index)}
                className="bg-red-900 font-semibold text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Add Subject Button */}
        <button
          type="button"
          onClick={handleAddSubject}
          className="bg-blue-950 font-semibold text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Subject
        </button>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className={`py-2 px-4 rounded-md text-white transition duration-200 ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-green-950 hover:bg-green-800"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="flex justify-center items-center font-bold">
                  <div className="h-6 w-6 font-bold border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <span>Submitting...</span>
              </div>
            ) : (
              "Submit Results"
            )}
          </button>
        </div>
      </form>

      {/* Success Popup */}
      {successMessage && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-lg text-green-600">{successMessage}</p>
            <button
              onClick={() => setSuccessMessage("")}
              className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddResults;

// import React, { useState } from "react";

// const AddResults = () => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [enrollmentNumber, setEnrollmentNumber] = useState("");
//   const [studentName, setStudentName] = useState("");
//   const [semester, setSemester] = useState("");
//   const [subjects, setSubjects] = useState([
//     { subjectCode: "", name: "", internal: "", grade: "", credits: "" },
//   ]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubjectChange = (index, event) => {
//     const updatedSubjects = [...subjects];
//     updatedSubjects[index][event.target.name] = event.target.value;
//     setSubjects(updatedSubjects);
//   };

//   const handleAddSubject = () => {
//     setSubjects([
//       ...subjects,
//       { subjectCode: "", name: "", internal: "", grade: "", credits: "" },
//     ]);
//   };

//   const handleRemoveSubject = (index) => {
//     const updatedSubjects = subjects.filter((_, i) => i !== index);
//     setSubjects(updatedSubjects);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://studentdashboard-7vmj.onrender.com/api/student/result/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             enrollmentNumber,
//             studentName,
//             semester,
//             subjects,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setSuccessMessage("Results added successfully!");
//         setEnrollmentNumber("");
//         setStudentName("");
//         setSemester("");
//         setSubjects([
//           { subjectCode: "", name: "", internal: "", credits: "",  grade: "" },
//         ]);
//       } else {
//         setErrorMessage(data.message || "Failed to add results.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred while adding results.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-4 md:p-10 lg:p-0 bg-gray-400 min-h-full">
//       <h2 className="text-2xl font-serif text-green-950 font-bold mb-6 text-center">
//         Add Results
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6 overflow-x-auto overflow-y-auto h-[90vh] max-h-full w-full border-yellow-500 rounded-lg bg-gray-300 p-5 border-spacing-5"
//       >
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-bold text-gray-700">
//               Enrollment Number
//             </label>
//             <input
//               type="text"
//               value={enrollmentNumber}
//               onChange={(e) => setEnrollmentNumber(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
//               placeholder="Enter enrollment number"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-bold text-gray-700">
//               Student Name
//             </label>
//             <input
//               type="text"
//               value={studentName}
//               onChange={(e) => setStudentName(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
//               placeholder="Enter student name"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-bold text-gray-700">
//               Semester
//             </label>
//             <input
//               type="text"
//               value={semester}
//               onChange={(e) => setSemester(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
//               placeholder="Enter semester"
//               required
//             />
//           </div>
//         </div>

//         <div className="space-y-6">
//           <h3 className="text-sm font-bold text-gray-700">Subjects</h3>
//           {subjects.map((subject, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 items-center"
//             >
//               <input
//                 type="text"
//                 name="subjectCode"
//                 value={subject.subjectCode}
//                 onChange={(e) => handleSubjectChange(index, e)}
//                 className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
//                 placeholder="SubjectCode"
//                 required
//               />
//               <input
//                 type="text"
//                 name="name"
//                 value={subject.name}
//                 onChange={(e) => handleSubjectChange(index, e)}
//                 className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
//                 placeholder="Name"
//                 required
//               />
//               <input
//                 type="number"
//                 name="internal"
//                 value={subject.internal}
//                 onChange={(e) => handleSubjectChange(index, e)}
//                 className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
//                 placeholder="Internal"
//                 required
//               />
//               <input
//                 type="text"
//                 name="grade"
//                 value={subject.grade}
//                 onChange={(e) => handleSubjectChange(index, e)}
//                 className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
//                 placeholder="Grade"
//                 required
//               />
//               <input
//                 type="number"
//                 name="credits"
//                 value={subject.credits}
//                 onChange={(e) => handleSubjectChange(index, e)}
//                 className="p-2 border border-gray-300 rounded-md focus:ring-green-700"
//                 placeholder="Credits"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => handleRemoveSubject(index)}
//                 className="bg-red-900 font-semibold text-white py-2 px-4 rounded-md hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={handleAddSubject}
//           className="bg-blue-950 font-semibold text-white py-2 px-4 rounded-md hover:bg-blue-600"
//         >
//           Add Subject
//         </button>

//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className={`py-2 px-4 rounded-md text-white transition duration-200 ${
//               isLoading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-green-950 hover:bg-green-800"
//             }`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Submitting..." : "Submit Results"}
//           </button>
//         </div>
//       </form>

//       {successMessage && <p className="text-green-700">{successMessage}</p>}
//       {errorMessage && <p className="text-red-700">{errorMessage}</p>}
//     </div>
//   );
// };

// export default AddResults;
