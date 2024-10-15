import Image from "next/image";
import VegeIcon from "@/assets/vege-icon.png";

function LandingPage() {
  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <div className="relative w-full h-full bg-green-600 flex justify-center items-center">
        <Image
          src={
            "https://i.pinimg.com/736x/4e/73/dd/4e73ddcf54e1f4fdde51c25b2141597c.jpg"
          }
          layout="fill"
          objectFit="cover"
          alt="fresh-vegetables"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="w-full h-full bg-slate-200 flex flex-col justify-center items-start">
        <div className="mx-10 items-start flex flex-col space-y-14">
          <Image
            src={VegeIcon}
            alt="fresh-vegetables"
            width={400}
            height={400}
          />
          <p className="text-green-600 text-start font-semibold ml-8">
            Discover high-quality fresh vegetables directly from local farmers
            at VegeKlik, an e-commerce application that makes it easy for you to
            shop healthy while supporting the local economy!
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md p-3 w-60 ml-8">
            Let's Explore!
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
