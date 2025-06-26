import React from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

export default function PhoneModal({ open, onClose, phone, onChange, onUpdate }: {
  open: boolean;
  onClose: () => void;
  phone: string;
  onChange: (value: string) => void;
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
        <h2 className="text-3xl italic font-medium text-gray-800 mb-1">PHONE NUMBER</h2>
        <p className="text-gray-500 mb-6">You'll use this Phone number to receive Calls</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          value={phone}
          onChange={e => onChange(e.target.value)}
          className="w-full rounded-full border border-gray-400 px-6 py-4 text-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <span className="text-gray-400 text-base mt-2">A verification code will be sent to this Number</span>
      </div>
      <button onClick={onUpdate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-4 text-lg mt-4">Update</button>
    </Modal>
  );
} 