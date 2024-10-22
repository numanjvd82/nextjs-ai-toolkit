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
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="guidance_scale"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guidance Scale</FormLabel>
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
                <FormLabel>Negative Prompt</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
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
