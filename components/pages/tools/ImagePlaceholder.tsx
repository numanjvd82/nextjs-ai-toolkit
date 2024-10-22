import PhotoImage from "@/public/photo.svg";
import Image from "next/image";

export default function ImagePlaceholder() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src={PhotoImage}
        className="object-cover mb-2"
        alt="Mock Image Svg"
        width={100}
        height={100}
      />
      <h1 className="font-bold font-sans">
        Generate an image using the prompt
      </h1>
    </div>
  );
}
