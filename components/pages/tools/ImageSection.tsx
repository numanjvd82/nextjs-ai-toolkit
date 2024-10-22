import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

type Props = {
  url: string | undefined;
  isMutating: boolean;
};

export const ImageSection: React.FC<Props> = ({ url, isMutating }) => {
  return (
    <div className="mt-4 md:flex-grow">
      <div className="relative w-full h-[400px] ">
        {url && !isMutating ? (
          <Image
            className="object-contain rounded-md"
            src={url}
            fill
            alt="Generated Image"
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
    </div>
  );
};

export default ImageSection;
