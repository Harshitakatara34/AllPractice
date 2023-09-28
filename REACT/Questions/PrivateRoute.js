// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from './Components/Login';
// import Dashboard from './Components/Dashboard';
// import PrivateRoute from './Components/PrivateRoute';
// import { AuthProvider } from './ContextApi/AuthContext';
// import Navbar from './Components/Navbar';
// function App() {
//   return (
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Navbar />}/>
//           <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
//       </Routes>

//   );
// }

// export default App;
// App.js





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import  {BrowserRouter} from "react-router-dom"
// import {AuthProvider} from './ContextApi/AuthContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <AuthProvider>
//     <App />
//     </AuthProvider>
//   </BrowserRouter>
// );
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// index.js






// import React, { createContext, useState } from 'react';
// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const authenticate = () => {
//     setIsAuthenticated(true);
//   };
//   return (
//     <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// authcontext





// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../ContextApi/AuthContext';
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };
// export default PrivateRoute;
// privateroute




// import React from 'react'
// import {Link} from "react-router-dom"
// const Navbar = () => {
//   return (
//     <div>
       
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/login">Login</Link>
//     </div>
//   )
// }
// export default Navbar   navbar






// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../ContextApi/AuthContext';
// import {Navigate} from 'react-router-dom';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { isAuthenticated, authenticate } = useContext(AuthContext);
//   const handleLogin = () => {
//     if (email === 'admin@example.com' && password === 'admin123') {
//       authenticate();
//     } else {
//       alert('Invalid credentials');
//     }
//   };
//   if(isAuthenticated){
//     return <Navigate to="/dashboard" />
//   }
//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       {isAuthenticated && <p>Login successful!</p>}
//     </div>
//   );
// };
// export default Login;
//   login.js








//   import React, { useContext } from 'react';
// import { AuthContext } from '../ContextApi/AuthContext'
// const Dashboard = () => {
//   const { isAuthenticated } = useContext(AuthContext);
// console.log(isAuthenticated)
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {isAuthenticated ? (
//         <p>Welcome to the user dashboard!</p>
//       ) : (
//         <p>You are not authorized to access this page.</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
//   dashboard.js