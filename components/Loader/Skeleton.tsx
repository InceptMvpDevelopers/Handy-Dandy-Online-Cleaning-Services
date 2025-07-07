// components/SkeletonCard.tsx
export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 space-y-4 animate-pulse">
      {/* Optional image/thumbnail */}
      <div className="h-40 bg-gray-200 rounded-md w-full" />

      {/* Text placeholders */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>

      {/* Optional avatar row */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
}


export function GridLoading  () {
    return  (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>)
}