type Payload = {
  inputs: string;
  guidance_scale?: number;
  negative_prompt?: string[];
  num_inference_steps?: number;
  seed?: number;
};

export const textToImageFetcher = async (
  url: string,
  {
    arg,
  }: {
    arg: Payload;
  }
) => {
  const { inputs, guidance_scale, negative_prompt, num_inference_steps, seed } =
    arg;
  const payload = {
    inputs,
    guidance_scale,
    negative_prompt,
    num_inference_steps,
    seed,
  };

  const result = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return result.blob();
};
