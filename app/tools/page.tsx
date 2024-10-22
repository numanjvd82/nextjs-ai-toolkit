"use client";

import { Card } from "@/components/ui/card";
import PhotoImage from "@/public/photo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import useTextToImage from "@/lib/hooks/useTextToImage";
import { convertBlobToUrl } from "@/lib/utils";
import Image from "next/image";

const formSchema = z.object({
  text: z
    .string()
    .min(3, "Prompt should contain 3 characters")
    .max(200, "Prompt should not contain more than 200 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const defaultPrompts = ["A guy holding an apple", "Picture of a dog"];

export default function Home() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const { blob, error, isMutating, trigger } = useTextToImage();
  const url = blob ? convertBlobToUrl(blob) : undefined;

  const onSubmit = async (values: FormValues) => {
    if (!values) return;
    const blob = await trigger({
      inputs: values.text,
    });

    if (blob) {
      form.resetField("text");
    }
  };

  return (
    <div className="bg-primary min-h-screen flex justify-center items-center p-4 overflow-hidden">
      <Card className="p-4 container md:flex md:justify-start md:gap-4">
        {/* Form */}
        <div className="md:min-w-[200px] md:w-1/3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Text Prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe what kind of image you want"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator />
              <Button disabled={isMutating} className="" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
        {/* Image */}
        <div className="mt-4 md:flex-grow">
          <div className="relative w-full h-[400px] ">
            {url ? (
              <Image
                className="object-cover rounded-md"
                src={url}
                fill
                alt="Generated Image"
              />
            ) : (
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
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
