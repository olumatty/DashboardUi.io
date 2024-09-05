import { FaChevronRight } from "react-icons/fa";
const MemberCard = ({ member }) => {
  return (
    <div className="p-6 bg-white rounded-xl space-y-4">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-bold text-gray-700">{member.total_members}</h1>
        <FaChevronRight />
      </div>
      <div>
        <p className="text-sm text-gray-400">{member.job}</p>
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
      </div>
    </div>
  );
};

export default MemberCard;
