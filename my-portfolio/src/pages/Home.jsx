import myImage from "../assets/Basit.jpg";
import Stack from "../components/Stack";
import BasBas from "../assets/BasBas.jpeg";

function Home() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-16 text-white flex space-x-8">
        <div className="relative flex">
          <div className="w-52 h-52 border-2 border-emerald-300 overflow-hidden rounded-lg">
            <img
              src={BasBas}
              alt="My picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-7 -right-4  bg-transparent rounded-2xl text-emerald-300">
            <span className="font-mono text-2xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              {`</>`}
            </span>
          </div>
        </div>

        <div className="text-center py-14">
          <h1 className="text-4xl font-bold">
            Hi, I'm Mustapha AbdulBasit Olamide.
          </h1>
          <p className="mt-4 text-gray-500 text-xl">Frontend Developer || Project Manager</p>
        </div>
      </div>

      <Stack />
    </div>
  );
}

export default Home;
