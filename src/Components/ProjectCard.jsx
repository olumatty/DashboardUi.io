import React from "react";
import { TiAttachment } from "react-icons/ti";
const ProjectCard = ({ project }) => {
  return (
    <div className="p-6 bg-white rounded-xl space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">{project.name}</h1>
        <p className="text-sm text-gray-500">{project.type}</p>
      </div>
      <p>
        <span className="text-xs p-2 rounded bg-gray-100">{project.date}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="w-[40%] bg-indigo-500 rounded-full h-2"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1669475535925-a011d7c31d45?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-8 h-8 rounded-full border-4 border-white"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1670006626907-83c7d89e320f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-4"
          />
          <img
            src="https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-8"
          />
        </div>
        <p className="flex space-x-1 items-center text-gray-400"> 
          <TiAttachment /> <span>{project.files} </span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
