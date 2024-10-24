import Link from "next/link";
import { Button } from "../../ui/button";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-teal-400 via-pink-400 to-orange-400 font-sans  text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8">Click the button below!</p>
        <Button className="bg-primary-foreground text-teal-600 font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:-translate-y-1">
          <Link href="/tools">Get started</Link>
        </Button>
      </div>
    </section>
  );
}
