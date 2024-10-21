import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-400 via-pink-400 to-orange-400 font-sans text-primary-foreground py-20 min-h-96 flex justify-center items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">AI Toolkit</h1>
        <p className="text-xl mb-8">
          Use these tools to boost your creativity and enhance your productivity
        </p>

        <Button className="bg-primary-foreground text-teal-600 font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:-translate-y-1">
          <Link href="#features">Explore Tools</Link>
        </Button>
      </div>
    </section>
  );
}
