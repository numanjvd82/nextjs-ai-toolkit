"use client";

import { Card } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ImageSection from "@/components/pages/tools/ImageSection";

import TextToImgForm from "@/components/pages/tools/TextToImgForm";
import useTextToImage from "@/lib/hooks/useTextToImage";
import { convertBlobToUrl } from "@/lib/utils";
import { toast } from "sonner";

const formSchema = z.object({
  text: z
    .string()
    .min(3, "Prompt should contain 3 characters")
    .max(200, "Prompt should not contain more than 200 characters"),
  guidance_scale: z.number().int().positive().min(1).max(30).optional(),
  negative_prompt: z
    .string()
    .transform((input) => input.split(",").map((str) => str.trim()))
    .refine((arr) => arr.length > 0 && arr.every((item) => item.length > 0), {
      message: "Each item must be a non-empty string",
    })
    .optional(),
});

export type FormValues = z.infer<typeof formSchema>;

const defaultPrompts = ["A guy holding an apple", "Picture of a dog"];

export default function Home() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const {
    blob,
    error,
    isMutating,
    trigger: convertTextToImage,
  } = useTextToImage();
  const url = blob ? convertBlobToUrl(blob) : undefined;

  const onSubmit = async (values: FormValues) => {
    if (!values) return;
    const blob = await convertTextToImage({
      inputs: values.text,
    });

    if (!blob && error) {
      toast.error(error.message, {
        action: {
          label: "Try again",
          onClick: () =>
            convertTextToImage({
              inputs: values.text,
            }),
        },
      });
    }

    if (blob) {
      form.resetField("text");
    }
  };

  return (
    <div className="bg-primary min-h-screen flex justify-center items-center p-4 overflow-hidden">
      <Card className="p-4 container md:flex md:justify-start md:gap-4">
        <div className="md:min-w-[200px] md:w-1/3">
          <TextToImgForm
            form={form}
            isMutating={isMutating}
            onSubmit={onSubmit}
          />
        </div>
        <ImageSection isMutating={isMutating} url={url} />
      </Card>
    </div>
  );
}
