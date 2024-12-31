import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="header bg-blue-950 min-h-10 flex justify-between items-center px-4">
        <div className="left text-white font-bold font-sans italic">Project-LMS</div>
        <div className="right text-white mr-10">
          <ul className="flex gap-8 text-sm font-semibold">
            <li className="hover:text-blue-400">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
