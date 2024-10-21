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
              Pre-trained AI Models
            </h3>
            <p className="text-gray-600">
              Use state-of-the-art models for NLP, computer vision, and more.
            </p>
          </div>

          <div className="bg-primary-foreground p-8 shadow-lg rounded-lg text-center">
            <TextIcon className="h-4 w-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Custom Model Training
            </h3>
            <p className="text-gray-600">
              Train models tailored to your specific use case using our
              intuitive platform.
            </p>
          </div>

          <div className="bg-primary-foreground p-8 shadow-lg rounded-lg text-center">
            <TextIcon className="h-4 w-4" />
            <h3 className="text-2xl font-semibold mb-2">Seamless Deployment</h3>
            <p className="text-gray-600">
              Easily deploy AI models to the cloud with just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
