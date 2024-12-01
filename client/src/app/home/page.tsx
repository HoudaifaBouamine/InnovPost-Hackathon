export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen text-white pt-40"
        style={{ backgroundImage: "url('/HeroSection.svg" }}
      >
        <div>
          <h2 className="text-xl">Experience Seamless Services With</h2>
          <h1 className="text-yellow-400 text-4xl font-extrabold my-8">
            Algérie Post
          </h1>
          <p className="text-sm max-w-[50vw]">
            Explore a wide range of services designed to make your life easier,
            including secure money transfers, bill payments, shipment tracking,
            and customer satisfaction surveys. Stay connected and efficient with
            Algeria Post—your gateway to modern postal solutions
          </p>
        </div>
      </div>
    </>
  );
}
