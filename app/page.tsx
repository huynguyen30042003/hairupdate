"use client";
import React, { useState } from "react";

const Page = () => {
  const [result,setResult] = useState('')
  const [loading,setLoading] =useState(false)

  const sendVerificationCode = async () => {
    console.log("gui email");
    
    fetch('/api/emails',{
      method:'POST'
    })

    .then(response=>response.json())
    .then(data=>setResult(data))
    .catch(error=>setResult(error))
    .finally(()=>setLoading(false))
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <div onClick={sendVerificationCode}>Send Verification Code</div>
    </div>
  );
};

export default Page;
