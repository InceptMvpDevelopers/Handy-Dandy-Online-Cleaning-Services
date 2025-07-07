import React, { useEffect } from "react";
import SubCategoryCard from "./Subcategorycard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubcategories } from "@/store/subcategories";
import { RootState } from "@/store";
import { Key } from "lucide-react";
import SkeletonCard from "../Loader/Skeleton";
import { GridLoading } from "../Loader/Skeleton";

export default function AfterHero() {
  const dispatch = useDispatch();
  const { subcategories, loading } = useSelector((state: RootState) => state.subcategories);


  useEffect(() => {
    if (subcategories.length == 0) {
      dispatch<any>(fetchSubcategories());
    }
  }, [dispatch, subcategories])



  return (
    <div className="flex flex-col gap-12 px-4 sm:px-8 py-8">
      {/* Header */}
      <div>
        <div className="flex text-[36px] sm:text-[52px] gap-x-2">
          <span className="font-[600]">WHAT WE </span>
          <span className="font-[400] italic">PROVIDE</span>
        </div>

        <div className="flex text-[24px] sm:text-[36px] gap-x-2">
          <span className="font-[600]">General</span>
          <span className="font-[400] italic">Cleaning</span>
        </div>
      </div>

      {/* General Cleaning Cards */}

      {!loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          {subcategories.filter((sc) => sc.main_category == "general").map((sc) => {
            return (
              <React.Fragment key={sc.id}>
                <SubCategoryCard
                  id={sc.id}
                  title={sc.title}
                  title2={sc.title2}
                  main_image={sc.image_url}
                  icon_image="/end-user/vacuum.png"
                  description={sc.description}
                  category={sc.main_category as "general" | "technical" | "interior"}
                />
              </React.Fragment>

            )
          })}
        </div>

      ) :
        (
          <GridLoading />

        )}







      {/* Technical Services Heading */}
      <div className="flex text-[24px] sm:text-[36px] gap-x-2">
        <span className="font-[600]">Technical</span>
        <span className="font-[400] italic">SERVICES</span>
      </div>

      {/* Technical Services Cards */}
      {
        !loading ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          {subcategories.filter((sc) => sc.main_category == "technical").map((sc) => {
            return (
              <React.Fragment key={sc.id}>
                <SubCategoryCard
                  id={sc.id}
                  title={sc.title}
                  title2={sc.title2}
                  main_image={sc.image_url}
                  icon_image="/end-user/vacuum.png"
                  description={sc.description}
                  category={sc.main_category as "general" | "technical" | "interior"}
                />
              </React.Fragment>

            )
          })}

        </div>)
          :
          (<GridLoading />)
      }



      {/* Interior Services Heading */}
      <div className="flex text-[24px] sm:text-[36px] gap-x-2">
        <span className="font-[600]">Interior</span>
        <span className="font-[400] italic">DESIGN</span>
      </div>

{
  !loading ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {
          subcategories.filter((sc) => sc.main_category == "interior").map((sc) => {
            return (
              <React.Fragment key={sc.id}>
                <SubCategoryCard
                  id={sc.id}
                  title={sc.title}
                  title2={sc.title2}
                  main_image={sc.image_url}
                  icon_image="/end-user/vacuum.png"
                  description={sc.description}
                  category={sc.main_category as "general" | "technical" | "interior"}
                />
              </React.Fragment>
            )
          })
        }



      </div>
  ) : (
    <GridLoading />
  )
}

      {/* Iterior Services Cards */}
    
    </div>
  );
}
