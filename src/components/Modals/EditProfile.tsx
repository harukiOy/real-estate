import React, { FC, useState } from "react";
import BlueButton from "../UI/Buttons/BlueButton";
import GradientButton from "../UI/Buttons/GradientButton";
import DeleteProfileModal from "./DeleteProfileModal";

type Props = {
  userEditModalOpen: boolean;
  setUserEditModalOpen: (arg: boolean) => void;
};

const EditProfile: FC<Props> = ({
  setUserEditModalOpen,
  userEditModalOpen,
}) => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="max-w-[560px] p-10 rounded-[24px] shadow-xl shadow-white/30 text-white bg-[#0A0A0A] z-[1110]">
      <div className="flex justify-between items-center mb-10">
        <h4 className="text-4xl">Edit Profile</h4>
        <button onClick={() => setUserEditModalOpen(false)}>x</button>
      </div>
      <div className="flex items-center mb-10">
        <div className="mr-10">
          <div className="w-28 h-28 rounded-full bg-slate-600"></div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="firstname" className="mb-1 text-[12px]">
            Firstname
          </label>
          <input
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          />
          <label htmlFor="lastname" className="mb-1 text-[12px]">
            Lastname
          </label>
          <input
            type="text"
            className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
          />
        </div>
      </div>
      <div className="mb-10">
        <label htmlFor="firstname" className="mb-1 text-[12px]">
          Email
        </label>
        <input
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
        <label htmlFor="currentPassword" className="mb-1 text-[12px]">
          Current Password
        </label>
        <input
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
        <label htmlFor="newPassword" className="mb-1 text-[12px]">
          New Password
        </label>
        <input
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
        <label htmlFor="confirm" className="mb-1 text-[12px]">
          Confirm New Password
        </label>
        <input
          type="text"
          className="w-full py-3 px-2 mb-5 bg-[#0E0E0E] rounded-lg"
        />
      </div>
      <div className="flex justify-between space-x-6">
        <BlueButton onClick={() => setDeleteOpen((prev) => !prev)}>
          Delete account
        </BlueButton>
        <GradientButton>Save</GradientButton>
      </div>
      <div className="absolute min-w-screen min-h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;">
        {deleteOpen && <DeleteProfileModal />}
      </div>
    </div>
  );
};

export default EditProfile;