import AuthProvider from "./Provider/authProvider";
import Routes from "./Routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Main from "./Pages/Main/Main";
// import Login from "./Pages/Login/Login";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/main" element={<Main />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Dashboard() {
//   return <h2>Dashboard</h2>;
// }

// /* eslint-disable react/prop-types */
// import "./App.css";
// import { Main } from "./Pages/Main/Main";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">MainPage</Link>
//             </li>
//             {/* <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/reset">Reset</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li> */}
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Main />} />
//           {/* <Route path="/login" element={<Login />} />
//           <Route path="/reset" element={<PasswordReset />} />
//           <Route path="/dashboard" element={<DefaultLayout />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Main() {
//   return <h2>Main</h2>;
// }

// // function Login() {
// //   return <h2>Login</h2>;
// // }

// // function PasswordReset() {
// //   return <h2>Password Reset</h2>;
// // }

// // function Dashboard() {
// //   return <h2>Dashboard</h2>;
// // }
