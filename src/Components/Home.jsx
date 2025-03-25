import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState(" ");
  const [value, setValue] = useState(" ");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  
useEffect(() => {
    if(pasteId){
        const paste = allPastes.find((p)=>p._id===pasteId);
        setTitle(paste.title);
        setValue(paste.content);
    }
}, [pasteId]);


  function createPaste() {
    const paste = {
        title:title,
        content:value,
        _id:pasteId ||
        Date.now().toString(36),
        createdAt: new Date().toLocaleString(),
    }


    if(pasteId){
    // update
    dispatch(updateToPastes(paste));

    }
    else{
   //create
     dispatch(addToPastes(paste));
    }
    //after creation and updation 
    setTitle(' ');
    setValue('');
    setSearchParams({});
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-700 rounded-xl shadow-lg mt-5">
      <h2 className="text-3xl font-bold text-center text-white-800 mb-2">Paste Your Notes</h2>
      <div className="flex flex-row gap-4">
        <input
          className="p-2 rounded-2xl border-2  mt-3 outline-0"
          type="text"
          placeholder="enter title here...."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className="p-2  mt-3 outline-0 w-full  bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition duration-200"
        >
          {pasteId ? "Update My Paste" : "create my Paste"}
        </button>
      </div>
      <div className="mt-8 text-black">
        <textarea
          className="p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-full h-40 resize-none bg-white"
          value={value}
          placeholder="enter content here...."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
