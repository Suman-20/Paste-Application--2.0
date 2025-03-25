import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { FiEdit, FiEye, FiTrash, FiCopy, FiShare2 } from "react-icons/fi";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="border-2 p-2 rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none">
      <input
        className="border-2 mt-1.5 p-1.5 rounded-2xl min-w-[450px] "
        type="search"
        placeholder="search here...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-5">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200" key={paste?._id}>
                <div className="text-2xl font-semibold text-gray-800 mb-2">{paste.title}</div>
                <div className="text-gray-600">{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <div  className="flex flex-wrap gap-3 mt-3" >
                  <a href={`/?pasteId=${paste?._id}`}
                   >

                  <FiEdit className=" text-black hover:text-red-400 transition duration-300 hover:scale-110" size={20} />
                     </a>
                  </div>

                  <div  className="flex flex-wrap gap-3 mt-3"  >
                    <a href={`/pastes/${paste?._id}`}>
                    <FiEye className=" text-black hover:text-red-400 transition duration-300 hover:scale-110" size={20} />
                    </a>
                  </div>
                  <div  className="flex flex-wrap gap-3 mt-3" onClick={() => handleDelete(paste?._id)}>
                  <FiTrash className=" text-black hover:text-red-400 transition duration-300 hover:scale-110" size={20} />
                  </div>
                  <div  className="flex flex-wrap gap-3 mt-3"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clickBord Successfuly");
                    }}
                  >
                   <FiCopy className=" text-black hover:text-red-400 transition duration-300 hover:scale-110" size={20} />
                  </div>
                  <div
                   className="flex flex-wrap gap-3 mt-3"
                   onClick={() => {
                    const pasteLink = `${window.location.origin}/pastes/${paste?._id}`;
                    navigator.clipboard.writeText(pasteLink);
                    toast.success("Paste link copied to clipboard!");
                  }}
                  >  <FiShare2 className=" text-black hover:text-purple-400 transition duration-300 hover:scale-110" size={20} /></div>
                </div>

                <div  className="text-gray-500 mt-2 text-sm">{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;









