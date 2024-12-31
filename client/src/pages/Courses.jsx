import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios'
export default function Courses() {
    const [courses,setCourses] = useState([
        // {
        //   id: 1,
        //   title: "React for Beginners",
        //   description: "Learn the basics of React and build your first web application.",
        //   image: "https://via.placeholder.com/300x150?text=React+Course",
        // },
        // {
        //   id: 2,
        //   title: "Mastering JavaScript",
        //   description: "Deep dive into JavaScript concepts and best practices.",
        //   image: "https://via.placeholder.com/300x150?text=JavaScript+Course",
        // },
        // {
        //   id: 3,
        //   title: "CSS for Modern Web Design",
        //   description: "Create stunning websites with modern CSS techniques.",
        //   image: "https://via.placeholder.com/300x150?text=CSS+Course",
        // },
        // {
        //   id: 4,
        //   title: "Node.js Backend Development",
        //   description: "Build scalable backend applications using Node.js.",
        //   image: "https://via.placeholder.com/300x150?text=Node.js+Course",
        // },
      ]);
useEffect(()=>{
  const fetchCourses = async ()=>{
    try{
      const response = await axios.get(`http://localhost:5000/api/routes/courses`);
      setCourses(response?.data);
      console.log(response.data)
    }
    catch(err){
      console.log(err)
    }
  }

  fetchCourses();
},[])

const addCourse =async(id)=>{
  const response = await axios.get(`http://localhost:5000/api/routes/user/${currentUser?.id}`,{withCredentials:true,headers:{Authorization:`Bearer ${token}`}});
  const {purchasedCourses}= response.data;
  purchasedCourses.push(id);
}

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg" onClick={addCourse(course._id)}>
                Add Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
