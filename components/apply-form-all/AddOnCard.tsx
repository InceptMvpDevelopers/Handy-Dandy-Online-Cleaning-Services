import React from 'react'
import { addOn } from '@/app/types/types'
import { RootState } from '@/store'
import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { addAddOn, removeAddOn, decreaseAddonQuantity } from '@/store/applyFormSlice'

type AddOnProps = {
    addOn: addOn
}

export default function AddOnCard({addOn }: AddOnProps) {
const dispatch = useDispatch();
const {selectedAddOns }= useSelector((state: RootState)=> state.applyForm);

const existingAddOn = selectedAddOns.find((aqib)=>aqib.addon.id === addOn.id);

    return (
 <div
                  key={addOn.title}
                  className="min-w-[250px] max-w-[260px] bg-white rounded-2xl border border-gray-100 shadow p-4 flex flex-col"
                >
                  <img
                    src={addOn.image_url}
                    alt={addOn.title}
                    className="w-full h-32 object-cover rounded-xl mb-3"
                  />
                  <div className="font-semibold text-base leading-tight mb-1">{addOn.title}</div>
                  <div className="text-xs text-gray-400 font-medium mb-1">{addOn.price}</div>
                  <div className="text-sm text-gray-600 mb-2 min-h-[36px]">{addOn.description}</div>
                  <a href="#" className="text-blue-700 text-sm font-semibold mb-3 hover:underline">Learn More</a>
              
            {existingAddOn ? (
  <div className="flex items-center justify-between gap-2">
    <button
      onClick={() => dispatch(decreaseAddonQuantity(addOn))}
      className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold"
    >
      –
    </button>
    <span className="font-medium text-sm">{existingAddOn.quantity}</span>
    <button
      onClick={() => dispatch(addAddOn(addOn))}
      className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold"
    >
      +
    </button>
    <button
      onClick={() => dispatch(removeAddOn(addOn))}
      className="text-xs text-red-500 ml-2 hover:underline"
    >
      Remove
    </button>
  </div>
) : (
  <button
    onClick={() => dispatch(addAddOn(addOn))}
    className="flex items-center justify-between border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 transition"
  >
    Add
    <span className="ml-2 w-5 h-5 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-lg font-bold">+</span>
  </button>
)}

              
                 
                </div>
  )
}
