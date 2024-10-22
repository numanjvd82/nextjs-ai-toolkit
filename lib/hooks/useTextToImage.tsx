import useSWRMutation from "swr/mutation";
import { textToImageFetcher } from "../data";

export default function useTextToImage() {
  const {
    data: blob,
    error,
    isMutating,
    trigger,
  } = useSWRMutation(
    "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
    textToImageFetcher
  );

  return {
    blob,
    error,
    isMutating,
    trigger,
  };
}
