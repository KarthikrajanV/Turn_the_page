import React from 'react'

const Skeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Skeleton for heading */}
      <div className="bg-gray-300 h-12 w-3/4 mb-8 mx-auto rounded-md mt-10"></div>

      {/* Skeleton for paragraphs */}
      {[...Array(10)].map((_, index) => (
        <div key={index} className="bg-gray-300 h-6  mb-4 rounded-md mx-10"></div>
      ))}
    </div>
  )
}

export default Skeleton