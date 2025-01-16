import { motion } from "framer-motion";
import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";

function FeaturesSection() {
  return (
    <motion.section
      id="services-section" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full py-1 pt-12 md:pt-12 md:py-2 lg:py-32 bg-muted"
    >
      <div className="container grid items-center justify-center gap-4 text-center lg:gap-10">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
           Découvrez nos services de conseil
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Découvrez comment Upmind Business Consulting peut aider votre organisation avec une gamme de services adaptés à vos besoins.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container">
          <Link href="/informationSystems">
            <FeatureCard
              image="/informationSystemsImg.jpeg"
              title="Systèmes d’Information"
              description="Des solutions commerciales complètes pour stimuler la croissance et l'efficacité."
            />
          </Link>
          <Link href="/managementConsulting">
            <FeatureCard
              image="/managementConsultingImg.jpeg"
              title="Conseil en Management et Organisation"
              description="Optimisez vos processus de gestion et votre structure organisationnelle."
            />
          </Link>
          <Link href="/strategicConsulting">
            <FeatureCard
              image="/strategicConsultingImg.jpg"
              title="Conseil stratégique"
              description="Développer et mettre en œuvre des stratégies pour une réussite durable."
            />
          </Link>
          <Link href="/operationalConsulting">
            <FeatureCard
              image="/operationalConsultingImg.jpeg"
              title="Conseil opérationnel"
              description="Améliorer les performances opérationnelles et rationaliser les opérations."
            />
          </Link>
          <Link href="/projectSupport">
            <FeatureCard
              image="/projectSupportImg.jpeg"
              title="Accompagnement sur les projets & programmes"
              description="Un accompagnement expert à chaque étape de vos projets et programmes."
            />
          </Link>
          <Link href="/humanCapital" className="sm:mb-[10px] mb-[60px]"
          >
                      <FeatureCard
              image="/humanCapitalImg.jpg"
              title="Capital Humain et Conduite de Changement"
              description="Renforcez vos effectifs et gérez efficacement le changement."
            />
          </Link>
        </div>

      </div>
    </motion.section>
  );
}

// Updated FeatureCard component
function FeatureCard({ image, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex justify-center"
    >
      <Card className="w-full max-w-[340px] h-[389px] flex flex-col items-center justify-between gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
}

export default FeaturesSection;