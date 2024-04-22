"use client"
import React, { useState } from 'react';


const InputShortener = ({setInputValue}) => {

    const [value, setValue] = useState("");
const handleClick =() =>{
    setInputValue(value);
    setValue("");
}

    return (
        <div className="bg-blue-100 flex items-center justify-center p-4 w-full max-w-md mx-auto rounded-lg shadow-md mt-10">
            <div>
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    URL <span className="text-purple-500">Shortener</span>
                </h1>
                <div className="flex items-center justify-between">
                    <input 
                        type="text" 
                        placeholder="Enter your URL here" 
                        className="flex-grow p-2 border rounded border-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
                        value={value}
                        onChange={e =>setValue(e.target.value)}

                    />
                    <button onClick={handleClick}
                        className="ml-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors">
                        Shorten
                    </button>
                </div>
            </div>
        </div>
    )
}


export default InputShortener;
