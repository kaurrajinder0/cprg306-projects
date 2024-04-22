"use client";

import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_REACT_APP_BITLY_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          long_url: inputValue,
          domain: 'bit.ly',
          group_guid: `${process.env.NEXT_PUBLIC_REACT_APP_GUID}`,
        }),
      });
      const data = await response.json();
      setShortenLink(data.link);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  return (
    <div className="h-20">
      {loading ? (
        <div className="mt-4 font-bold text-center text-dark-violet">Loading...</div>
      ) : error ? (
        <div className="mt-4 font-bold text-center text-dark-violet">Error: {error.message}</div>
      ) : shortenLink && (
        <div>
          <p className="mt-4 text-2xl font-bold text-center text-dark-violet">{shortenLink}</p>
          <CopyToClipboard
            className="m-auto px-2 h-8 block text-dark-violet bg-light-gray border border-dark-violet hover:bg-dark-violet hover:text-light-gray"
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  )}


export default LinkResult;