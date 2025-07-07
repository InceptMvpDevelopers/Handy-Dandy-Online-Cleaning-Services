"use client"

import React from 'react'
import Navbar from '@/components/enduser/Navbar'
import SubCategoryCard from '@/components/enduser/Subcategorycard'
import ServiceCard from '@/components/enduser/serviceCard'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSubcategories } from '@/store/subcategories'
import { useEffect } from 'react'
import { RootState } from '@/store'
import { fetchSubCategories2 } from '@/store/subcategories2'
import { fetchServices } from '@/store/servicesSlice'



export default function Page() {



  const dispatch = useDispatch();
  const { subcategories } = useSelector((state: RootState) => state.subcategories);
  const { SubCategories2 } = useSelector((state: RootState) => state.subcategories2)
  const { services } = useSelector((state: RootState) => state.services);
  const params = useParams();
  const category = params.category;
  const selectedSubCategory = useSelector((state: RootState) => state.selectedSubCategory)

  useEffect(() => {
    if (subcategories.length == 0) {
      dispatch<any>(fetchSubcategories());
    }
    if (SubCategories2.length == 0) {
      dispatch<any>(fetchSubCategories2());
    }
    if (services.length == 0) {
      dispatch<any>(fetchServices());
    }
  }, [dispatch, subcategories, SubCategories2, services])



  return (
    <div>
      <Navbar />
      <div className='flex flex-col gap-6 p-4'>
        {/* General Cleaning Cards */}

        <div className="flex bg-white flex-row gap-6 overflow-x-auto">
          {
            subcategories.filter((sc) => sc.main_category == category).map((sc) => {
              return (
                <div key={sc.id} className='flex w-full max-w-[350px] min-w-[280px]'>
                  <SubCategoryCard
                    id={sc.id}
                    title={sc.title}
                    title2={sc.title2}
                    main_image={sc.image_url}
                    icon_image="/end-user/vacuum.png"
                    description={sc.description}
                    category={sc.main_category as "general" | "technical" | "interior"}
                  />
                </div>

              )
            })
          }

        </div>


        <div className='flex justify-center items-center flex-col'>
          <div className="flex text-[#282828] text-[52px] gap-x-2">
            <span className="font-[600]">{subcategories.find(sc => sc.id == selectedSubCategory)?.title}</span>
            <span className="font-[400] italic">Cleaning</span>
          </div>
          <span className='text-gray-500'>Fresh Spaces Made for you</span>
        </div>


        <div className='flex flex-col-reverse lg:flex-row'>
          <div className=' flex flex-col flex-[2]'>
            {SubCategories2
              .filter((s) => s.related_sub_category_1 === selectedSubCategory)
              .map((sc) => (
                <div className='flex mt-6 flex-col gap-6' key={sc.id}>
                  {/* Heading */}
                  <div className='flex h-[1px]  bg-gray-200 w-full'></div>
                  <div>
                    <p className='text-[26px]'>{sc.title}</p>
                    <p className='text-[13px] text-gray-500'>Transform Your Home with Expert Cleaning</p>
                  </div>
                  {/* Map */}
                  <div className=" flex flex-wrap  gap-6 ">
                    {
                      services.filter((s)=> s.related_subcategory_2==sc.id).map((s) => {
                        return (
                          <ServiceCard key={s.id} service={s}
                          />
                        )
                      })
                    }
                  </div>
                </div>
              ))}
          </div>
          <div className='flex-1'> 
            <p>add to cart here</p>
          </div>
        </div>


      </div>


    </div>
  )
}
