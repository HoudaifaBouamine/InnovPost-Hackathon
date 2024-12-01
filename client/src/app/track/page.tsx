import Image from "next/image";

export default function Track() {
  return (
    <>
      <div className="relative w-full h-auto max-sm:hidden">
        <Image
          src="/tracking.png"
          alt="Description of the image"
          layout="intrinsic"
          width={1000} // Natural width of the image
          height={500} // Natural height of the image
          className="w-[100vw] h-auto" // Tailwind class to make it full viewport width
        />
      </div>
      {/* <div className="content p-8 py-0">
        <div>
          <div className="flex gap-3 justify-center items-center">
            <div className="border border-black">
              <div className="relative w-fit my-8 flex justify-center rounded-lg ">
              <h2 className="text-xl text-black font-semibold absolute -top-20">
                Track your Order
              </h2>
                <Image
                  src="/image.png"
                  alt="Description of the image"
                  layout="intrinsic"
                  width={500} // Natural width of the image
                  height={500} // Natural height of the image
                  className="w-[] h-auto" // Tailwind class to make it full viewport width
                />
              </div>
              <h2>Track a dynamic package</h2>
            </div>
            <div className="border border-black">
              <div className="relative w-fit my-8 flex justify-center rounded-lg ">
                <Image
                  src="/image.png"
                  alt="Description of the image"
                  layout="intrinsic"
                  width={500} // Natural width of the image
                  height={500} // Natural height of the image
                  className="w-[] h-auto" // Tailwind class to make it full viewport width
                />
              </div>
              <h2>Track a dynamic package</h2>
            </div>
          </div>
        </div>
      </div> */}



<div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-800">Your Title Here</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Action Button
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example of individual item/card */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">Item Title</h2>
            <p className="text-gray-600">Description or content for this item.</p>
          </div>

          {/* Repeat similar blocks for other items */}
        </div>
      </div>
    </div>
    </>
  );
}
