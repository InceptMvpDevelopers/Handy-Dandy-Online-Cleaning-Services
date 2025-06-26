import React from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

export default function NameModal({ open, onClose, firstName, lastName, onChange, onUpdate }: {
  open: boolean;
  onClose: () => void;
  firstName: string;
  lastName: string;
  onChange: (field: 'firstName' | 'lastName', value: string) => void;
  onUpdate: () => void;
}) {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      ariaHideApp={false}
className="relative bg-white rounded-3xl shadow-xl p-10 w-full max-w-lg mx-auto outline-none"
      overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
    >

        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600">
          <MdClose />
        </button>
        <div className="mb-2">
          <h2 className="text-3xl italic font-medium text-gray-800 mb-1">NAME</h2>
          <p className="text-gray-500 mb-6">This is the name you would like other people to use when referring to you.</p>
        </div>
        <div className="flex flex-col gap-6 mb-8">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={e => onChange('firstName', e.target.value)}
              className="w-full rounded-full border border-gray-400 px-6 py-4 text-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={e => onChange('lastName', e.target.value)}
              className="w-full rounded-full border border-gray-400 px-6 py-4 text-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>
        <button onClick={onUpdate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-4 text-lg">Update</button>
        
    </Modal>
  );
} 