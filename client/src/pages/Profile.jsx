import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import axios from 'axios';
export default function Profile() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        role: "",
        bio: "",
        password: "",
      });
      
      const {currentUser}= useContext(UserContext);
      const token = currentUser?.token;
       // Local state to track if changes are made
  const [isChanged, setIsChanged] = useState(false);
      useEffect( ()=>{
        const fetchUserData = async ()=>{
          try{
            const response = await axios.get(`http://localhost:5000/api/routes/user/${currentUser?.id}`,{withCredentials:true,headers:{Authorization:`Bearer ${token}`}});

            const {name,email,phone,address} = response.data;

            setUser((prevUser) => ({
              ...prevUser, // Retain the existing state
              name: name,
              email: email,
              phone: phone,
              address: address,
            }));
            

            console.log(response.data)
          }
           

          catch(err){
            console.log(err);
          }
      }
    fetchUserData();},[])
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setIsChanged(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    setIsChanged(false);
    // Logic to save updated user details to backend
  };
    return (
        <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            User Profile
          </h1>
  
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold">Name:</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold">Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-semibold">Phone:</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Address */}
            <div>
              <label className="block text-gray-700 font-semibold">Address:</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Role */}
            <div>
              <label className="block text-gray-700 font-semibold">Role:</label>
              <select
                name="role"
                value={user.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
  
            {/* Bio */}
            <div>
              <label className="block text-gray-700 font-semibold">Bio:</label>
              <textarea
                name="bio"
                value={user.bio}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Old Password */}
            <div>
              <label className="block text-gray-700 font-semibold">
                Old Password:
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
             {/* New Password */}
             <div>
              <label className="block text-gray-700 font-semibold">
                New Password:
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Save Changes Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className={`px-6 py-2 rounded-lg text-white font-semibold ${
                  isChanged
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isChanged}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}
