"use client"
import { useState } from "react";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";

function App() {

  const[inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-start space-y-4 bg-cyan w-full min-h-screen">
      <InputShortener setInputValue ={setInputValue}/>
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;