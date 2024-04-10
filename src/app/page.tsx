export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex items-center">
        <h1 className="mr-4">Metro Line</h1>
        <div className="relative">
          <select className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Filter by...</option>
            <option>Northwest</option>
            <option>City & Southwest</option>
            <option>West</option>
            <option>Western Sydney Airport</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M9.293 15.707a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L10 13.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h1>Northwest</h1>
      </div>
      <div className="w-[1000] h-6 bg-[#008BB9] flex justify-between">
        {[...Array(13)].map((_, index) => (
          <div
            key={index}
            className="w-6 h-6 bg-white rounded-full hover:bg-gray-300"></div>
        ))}
      </div>{" "}
      <div className="flex">
        {[...Array(13)].map((_, index) => (
          <div key={index} className="w-32 h-16 bg-gray-300 m-1"></div>
        ))}
      </div>
      <div>
        <h1>City & Southwest</h1>
      </div>
      <div className="w-[1000] h-6 bg-[#008BB9] flex justify-between">
        {[...Array(18)].map((_, index) => (
          <div
            key={index}
            className="w-6 h-6 bg-white rounded-full hover:bg-gray-300"></div>
        ))}
      </div>{" "}
      <div className="flex">
        {[...Array(18)].map((_, index) => (
          <div key={index} className="w-32 h-16 bg-gray-300 m-1"></div>
        ))}
      </div>
      <div>
        <h1>West</h1>
      </div>
      <div className="w-[1000] h-6 bg-[#008BB9] flex justify-between">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="w-6 h-6 bg-white rounded-full hover:bg-gray-300"></div>
        ))}
      </div>
      <div className="flex">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="w-32 h-16 bg-gray-300 m-1"></div>
        ))}
      </div>
      <div>
        <h1>Western Sydney Airport</h1>
      </div>
      <div className="w-[1000] h-6 bg-[#008BB9] flex justify-between">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-6 h-6 bg-white rounded-full hover:bg-gray-300"></div>
        ))}
      </div>
      <div className="flex">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="w-32 h-16 bg-gray-300 m-1"></div>
        ))}
      </div>
      <div>
        <h1>Map</h1>
        <div className="w-64 h-32 bg-gray-300 m-1"></div>
      </div>
      <div>
        <h1>News & Updates</h1>
      </div>
    </main>
  );
}
