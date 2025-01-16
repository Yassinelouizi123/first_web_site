import { QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <section className="bg-gray-100 pb-20">
      <div className="container mx-auto max-w-4xl px-6 md:px-0">
        <div className="relative bg-white p-8 rounded-xl shadow-xl">
          <div className="absolute top-3 left-0 right-0 -mt-8 ml-4 text-gray-500">
            <QuoteIcon className="h-12 w-12 text-muted-foreground" />

          </div>
          <blockquote className="text-xl font-semibold text-gray-700 text-center">
            <p className="mb-6 italic">
              "Forts de leur expertise fonctionnelle et technique, nos consultants et experts interviennent sur des secteurs variés, dans des environnements complexes et en perpétuelle mutation"
            </p>
            <footer className="text-md text-gray-500">
              — Votre équipe d'experts
            </footer>
          </blockquote>
          <div className="absolute bottom-0 right-0 -mb-8 mr-4 text-gray-500">
        
          </div>
        </div>
      </div>
    </section>
  );
}
