import React, { useState } from 'react'

export default function Dashboard() {
    const [currentCourses, setCurrentCourses] = useState([
        // {
        //   id: 1,
        //   title: "Introduction to JavaScript",
        //   progress: "75%",
        //   instructor: "John Doe",
        //   completionDate: "2024-01-15",
        // },
        // {
        //   id: 2,
        //   title: "React for Beginners",
        //   progress: "50%",
        //   instructor: "Jane Smith",
        //   completionDate: "2024-02-10",
        // },
        // {
        //   id: 3,
        //   title: "Mastering Tailwind CSS",
        //   progress: "30%",
        //   instructor: "Mark Brown",
        //   completionDate: "2024-03-01",
        // },
      ]);
  return (
    <div className="min-h-screen bg-gray-100 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        User Dashboard
      </h1>

      {/* Current Courses Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Current Courses
        </h2>

        {currentCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg p-4 bg-gray-50 hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Instructor: </span>
                  {course.instructor}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Progress: </span>
                  {course.progress}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Completion Date: </span>
                  {course.completionDate}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            You are not enrolled in any courses at the moment.
          </p>
        )}
      </div>
    </div>
  </div>
  )
}
