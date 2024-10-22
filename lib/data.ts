type Payload = {
  inputs: string;
};

export const textToImageFetcher = async (
  url: string,
  {
    arg,
  }: {
    arg: Payload;
  }
) => {
  const payload = {
    inputs: arg.inputs,
    target_size: {
      width: 450,
      height: 400,
    },
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
