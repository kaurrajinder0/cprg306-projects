"use client"
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LinkResult = () => {
    const [ShortenLink, setShortenLink] = useState("Hello World");
    const [copied, setCopied] = useState(false);

    return (
        <div className='result flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto'>
            <p className="text-center">{copied ? "Copied!" : "Click button to copy the text"}</p>
            <CopyToClipboard 
                text={ShortenLink}
                onCopy={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000);  // Reset copied status after 3 seconds
                }}
            >
                <button 
                    className={`px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-colors ${
                        copied ? "bg-green-500 hover:bg-green-600" : ""
                    }`}
                >
                    {copied ? "Copied!" : "Copy to Clipboard"}
                </button>
            </CopyToClipboard>
        </div>
    );
};

export default LinkResult;
