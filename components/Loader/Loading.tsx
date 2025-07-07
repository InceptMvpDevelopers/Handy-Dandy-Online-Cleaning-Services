export default function LoadingSkeleton() {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md p-4 w-full max-w-md mx-auto space-y-4"
        >
          {/* Header */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4" />
              <div className="h-3 bg-gray-300 rounded w-1/2" />
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full h-48 bg-gray-300 rounded-xl" />

          {/* Bottom Lines */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full" />
            <div className="h-4 bg-gray-300 rounded w-5/6" />
            <div className="h-4 bg-gray-300 rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
