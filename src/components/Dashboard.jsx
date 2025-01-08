// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="p-6 mt-[5vh]">
//       {/* University Logo and Name */}
//       <div className="flex flex-col items-center mb-6">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHpYDLZgNOI4JKVLymEksHuDHk1kXXggMIw&s" // Replace with the actual university image URL
//           alt="University Logo"
//           className="w-[40vw] h-[35vh] mb-4 rounded-xl"
//         />
//         <h1 className="text-3xl font-bold font-serif text-green-900 items-center text-center mt-5">Andhra Loyola Institute of Engineering <br/>and Technology</h1>
//       </div>

//       {/* Welcome Message */}
//       <h1 className="text-center text-gray-700 text-[30px] mb-4 font-bold font-thin">
//         Welcome to <span className="font-bold text-black">ALIET University!</span> We are delighted to have you here.
//       </h1>

//       {/* Upload Fair Results Message */}
//       <p className="text-center text-red-600 text-[33px] font-mono">
//         Please upload fair and accurate results to maintain transparency and integrity.
//       </p>
//     </div>
//   );
// };

// export default Dashboard;




import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 mt-[5vh]">
      {/* University Logo and Name */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHpYDLZgNOI4JKVLymEksHuDHk1kXXggMIw&s" // Replace with the actual university image URL
          alt="University Logo"
          className="w-[90vw] h-auto sm:w-[60vw] md:w-[40vw] lg:w-[30vw] mb-4 rounded-xl"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-green-900 text-center mt-5">
          Andhra Loyola Institute of Engineering <br />
          and Technology
        </h1>
      </div>

      {/* Welcome Message */}
      <h1 className="text-center text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 font-thin">
        Welcome to{" "}
        <span className="font-bold text-black">ALIET University!</span> We are
        delighted to have you here.
      </h1>

      {/* Upload Fair Results Message */}
      <p className="text-center text-red-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono">
        Please upload fair and accurate results to maintain transparency and
        integrity.
      </p>
    </div>
  );
};

export default Dashboard;

