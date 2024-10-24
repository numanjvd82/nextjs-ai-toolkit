import Loader from "@/components/Loader";

export default function ImageLoader({ height = 400 }: { height?: number }) {
  return (
    <div
      className={`h-[${height}px] flex flex-col justify-center items-center`}
    >
      <Loader size={100} />
      <h1 className="font-sans text-lg">Loading Image....</h1>
    </div>
  );
}
