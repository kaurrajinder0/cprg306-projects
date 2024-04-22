"use client"
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const LinkResult = ({inputValue}) => {
    const [ShortenLink, setShortenLink] = useState("");
    console.log(ShortenLink);
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () =>{
        try{
            setLoading(true);
            const res= await axios(`https://api.urlshortener.com/shorten ${inputValue}`);
            setShortenLink(res.data.result.full_short_link);

        }catch(err) {
            setError(err);
        }finally {
            setLoading(false);

        }
    }

    useEffect(() =>{
        if(inputValue.length){
            fetchData();
        }

    }, [inputValue]);

    if(loading){
        return <p className="noData"> Loading...</p>
    }

    if(error){
        return <p className="noData"> Something went wrong :(</p>
    }


    return (
        <>
        {ShortenLink && (
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
            )}
        </>
    );
};

export default LinkResult;
