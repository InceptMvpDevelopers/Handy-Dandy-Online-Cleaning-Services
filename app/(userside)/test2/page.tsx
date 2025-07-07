"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/productsSlice";
import { fetchUsers } from "@/store/usersSlice";
import { fetchSubcategories } from "@/store/subcategories";
import type { RootState } from "@/store";
import type { Product } from "@/store/productsSlice";
import type { User } from "@/store/usersSlice";
import Link from "next/link";
import { subcategory } from "@/store/subcategories";
import { RootRaws } from "postcss/lib/root";
import { supabase } from "@/integrations/supabase/client";
import { fetchSubCategories2 } from "@/store/subcategories2";
import LoadingSkeleton from "@/components/Loader/Loading";
import SkeletonCard from "@/components/Loader/Skeleton";

export default function Test2Page() {
  const dispatch = useDispatch();
  const { products, loading: productsLoading, error: productsError } = useSelector((state: RootState) => state.products);
  const { users, loading: usersLoading, error: usersError } = useSelector((state: RootState) => state.users);
const {subcategories} = useSelector((state:RootState)=>state.subcategories)
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>

     <div className="flex flex-col gap-4 p-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
      <LoadingSkeleton />
      <div className="flex gap-4 mb-6">
        <Link href={"/test"}>Go to Test</Link>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => dispatch<any>(fetchProducts())}
        >
          Load Products
        </button>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => dispatch<any>(fetchUsers())}
        >
          Load Users
        </button>

         <button
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => dispatch<any>(fetchSubcategories())}
        >
          Load Sub Categories
        </button>

           <button
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => dispatch<any>(fetchSubCategories2())}
        >
          Load Sub Categories 2
        </button>

      <button
  onClick={() => {
    (async () => {
      const { data, error } = await supabase.from("sub_categories_1").select("*");
      if (error) console.error("Supabase error:", error);
      else console.log(data);
    })();
  }}
>
  press me
</button>

      </div>
      {productsLoading && <p>Loading products...</p>}
      {productsError && <p className="text-red-500">Error: {productsError}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {products && products.length > 0 && products.map((product: Product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={product.thumbnail} alt={product.title} className="w-32 h-32 object-contain mb-4" />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600 font-bold text-xl">${product.price}</span>
              <span className="text-xs text-gray-400 line-through">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
            </div>
            <span className="text-yellow-500">Rating: {product.rating}</span>
          </div>
        ))}
      </div>
      {usersLoading && <p>Loading users...</p>}
      {usersError && <p className="text-red-500">Error: {usersError}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users && users.length > 0 && users.map((user: User) => (
          <div key={user.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={user.image} alt={user.firstName + ' ' + user.lastName} className="w-24 h-24 rounded-full object-cover mb-4" />
            <h2 className="text-lg font-semibold mb-1">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-600 mb-1">{user.email}</p>
            <p className="text-gray-500 text-sm mb-1">{user.phone}</p>
            <span className="text-xs text-gray-400">Age: {user.age} | Gender: {user.gender}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 