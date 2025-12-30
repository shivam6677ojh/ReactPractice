// ...existing code...
import React from 'react'

const Card = ({ name, age, course }) => {
    return (
        <div className="w-72 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden m-3 font-sans text-gray-800">
            <div className="bg-amber-100 px-4 py-3 font-semibold text-lg">{name}</div>
            <div className="px-4 py-3 space-y-1">
                <p className="text-sm"><span className="font-medium">Age:</span> {age}</p>
                <p className="text-sm"><span className="font-medium">Course:</span> {course}</p>
            </div>
            <div className="px-4 py-2 bg-gray-50 text-sm text-gray-600">Enrolled</div>
        </div>
    )
}

export default Card
