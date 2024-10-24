import { TextIcon } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary-foreground p-8 shadow-lg rounded-lg text-center">
            <TextIcon className="h-4 w-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Text to Image Converter
            </h3>
            <p className="text-gray-600">
              Use state-of-the-art models for image generation using text.
            </p>
          </div>

          <div className="bg-primary-foreground p-8 shadow-lg rounded-lg text-center">
            <TextIcon className="h-4 w-4" />
            <h3 className="text-2xl font-semibold mb-2">Text Summarization</h3>
            <p className="text-gray-600">
              Summarize huge paragraphs of text into more meaningful text
            </p>
          </div>

          <div className="bg-primary-foreground p-8 shadow-lg rounded-lg text-center">
            <TextIcon className="h-4 w-4" />
            <h3 className="text-2xl font-semibold mb-2">Text Generation</h3>
            <p className="text-gray-600">Easily generate text using a prompt</p>
          </div>
        </div>
      </div>
    </section>
  );
}
