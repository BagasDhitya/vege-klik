import { CardProps } from "@/lib/utils/interface";
import Image from "next/image";

function Card({ id, title, description, image_url, alt, price }: CardProps) {
  return (
    <div id={id} className="w-full h-full rounded-md bg-white">
      <Image
        alt={alt || "products"}
        src={image_url || "https://i.pinimg.com/564x/6a/f1/ec/6af1ec6645410a41d5339508a83b86f9.jpg"}
        className="w-full h-1/2"
        width={100}
        height={100}
      />
      <div className="flex flex-col space-y-3">
        <h2 className="font-semibold text-black">{title}</h2>
        <p className="text-black">{description}</p>
        <h2 className="font-semibold text-red-400">Rp{price}</h2>
      </div>
    </div>
  );
}

export default Card;
