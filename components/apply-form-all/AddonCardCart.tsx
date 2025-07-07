import React from 'react'
import { addOn } from '@/app/types/types'
import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { addAddOn, removeAddOn, decreaseAddonQuantity } from '@/store/applyFormSlice'
import { IoMdClose } from "react-icons/io";

type AddOnProps = {
    addOn: addOn
}

export default function AddOnCardCart({ addOn }: AddOnProps) {
    const dispatch = useDispatch();
    const { selectedAddOns } = useSelector((state: RootState) => state.applyForm);

    const existingAddOn = selectedAddOns.find((aqib) => aqib.addon.id === addOn.id);

    return (
      <div
  key={addOn.id}
  className="min-w-[250px] w-full bg-white rounded-2xl border border-gray-100 shadow p-4 flex gap-3"
>
  <img
    src={addOn.image_url}
    alt={addOn.title}
    className="w-[80px] h-[80px] object-cover rounded-xl"
  />
  <div className="flex flex-col justify-between flex-grow">
    <div>
      <div className="flex gap-3 items-center">
        <div className="font-semibold text-base leading-tight">{addOn.title}</div>
        <div className="text-xs text-gray-400 font-medium">
  AED {addOn.price} x {existingAddOn?.quantity ?? 0} ={" "}
  <span className="text-blue-600 font-semibold">
    AED {addOn.price * (existingAddOn?.quantity ?? 0)}
  </span>
</div>

      </div>
      <div className="text-sm text-gray-600">{addOn.description}</div>
    </div>


      <div className='flex items-center justify-between flex-1 w-full  '>
          <div className="flex items-center bg-blue-100 rounded-md border  border-blue-300 gap-2 ">
            <button
              onClick={() => dispatch(decreaseAddonQuantity(addOn))}
              className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full font-bold"
            >
              –
            </button>
            <span className="font-medium text-sm">{existingAddOn?.quantity}</span>
            <button
              onClick={() => dispatch(addAddOn(addOn))}
              className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full font-bold"
            >
              +
            </button>
          </div>
            <button
              onClick={() => dispatch(removeAddOn(addOn))}
              className=" text-red-500 "
            >
              <IoMdClose />
            </button>
      </div>
  
  </div>
</div>

    )
}
