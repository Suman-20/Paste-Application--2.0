
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return <p className="text-center text-red-500 mt-10">Paste not found!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl border border-gray-200">
      <h2 className="cursor-not-allowed resize-none text-3xl font-bold text-center text-gray-800 mb-6">View Paste</h2>
      
      {/* Title Box */}
      <div className="mb-4">
        <label className="cursor-not-allowed resize-none block text-lg font-medium text-gray-700">Title:</label>
        <div className="cursor-not-allowed resize-none w-full p-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-700">
          {paste.title}
        </div>
      </div>

      {/* Content Box (Fixed Height & No Scroll) */}
      <div className=" cursor-not-allowed resize-none mb-6">
        <label className="cursor-not-allowed resize-none block text-lg font-medium text-gray-700">Content:</label>
        <div className="p-5 border border-gray-300 rounded-xl bg-gray-100 text-gray-700 overflow-hidden cursor-not-allowed resize-none">
          {paste.content}
        </div>
      </div>

      {/* Timestamp */}
      <p className=" cursor-not-allowed resize-none text-sm text-gray-500 text-center">
        Created At: {paste.createdAt}
      </p>
    </div>
  );
};

export default ViewPaste;
