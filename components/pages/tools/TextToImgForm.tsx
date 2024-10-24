import { FormValues } from "@/app/tools/page";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import HoverInfoCard from "./HoverInfoCard";

type Props = {
  onSubmit: (values: FormValues) => void;
  form: UseFormReturn<FormValues, any, undefined>;
  isMutating: boolean;
};

export const TextToImgForm: React.FC<Props> = ({
  onSubmit,
  form,
  isMutating,
}) => {
  return (
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
        <div className="grid grid-cols-2 items-center gap-2">
          <FormField
            control={form.control}
            name="guidance_scale"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormLabel>Guidance Scale</FormLabel>
                  <HoverInfoCard content=" Set a moderate value to balance quality and speed. Higher values might increase the quality but slow down the process. A range of 7-10 is typically good, but for faster generation, you can lower it slightly" />
                </div>
                <FormControl>
                  <Input type="number" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="negative_prompt"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormLabel>Negative Prompts</FormLabel>
                  <HoverInfoCard content="Keep it minimal or empty if you don't need to exclude anything specific. The more complex the negative prompt, the longer it might take to generate." />
                </div>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="num_inference_steps"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormLabel>Inference Steps</FormLabel>
                  <HoverInfoCard content="Reduce the number of inference steps. Fewer steps will lead to faster image generation, but it may impact quality. You can try reducing it to around 25-30 for a quicker result without sacrificing too much quality" />
                </div>
                <FormControl>
                  <Input type="number" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="seed"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormLabel>Seed</FormLabel>
                  <HoverInfoCard content="Fixing the seed value won’t directly impact speed, but it will ensure reproducibility if you run the same prompt multiple times" />
                </div>
                <FormControl>
                  <Input type="number" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isMutating} className="" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default TextToImgForm;
