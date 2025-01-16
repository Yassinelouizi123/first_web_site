"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const NotreIdentite = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-2xl">
      {/* Logo at the Top */}
      <div className="flex justify-center mb-12">
        <Image
          src="/logo.png"
          alt="Logo"
          width={250}
          height={250}
          className="h-40 w-40 sm:h-48 sm:w-48"
        />
      </div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-6"
      >
        Notre Identité
      </motion.h1>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-lg text-gray-700 mb-4">
          Chez Upmind Business Consulting, nous croyons en la puissance de la collaboration, de l'innovation et de l'excellence opérationnelle. Notre identité est façonnée par notre engagement à fournir des solutions sur mesure qui transforment les défis en opportunités.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Nous sommes une équipe de consultants passionnés, dédiés à aider les entreprises à atteindre leurs objectifs stratégiques grâce à une expertise approfondie et une approche personnalisée.
        </p>
        <p className="text-lg text-gray-700">
          Découvrez ce qui nous distingue et comment nous pouvons vous accompagner dans votre parcours de transformation.
        </p>
      </motion.div>

      {/* Key Sections with Images and Text */}
      <div className="space-y-12">
        {/* Section 1: Image + Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:shadow-xl transition-shadow">
            <div className="relative h-96 w-full">
              <Image
                src="/business-consulting-1.jpg"
                alt="Notre Vision"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center p-6">
                <h2 className="text-3xl font-bold text-white text-center">
                  Notre Vision
                </h2>
              </div>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p>
                Nous aspirons à être le partenaire de confiance des entreprises en quête de transformation et de croissance durable. Notre vision est de créer un impact positif et mesurable pour nos clients.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Text + Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:shadow-xl transition-shadow">
            <div className="text-lg text-gray-700 leading-relaxed">
              <p>
                Intégrité, innovation et collaboration sont au cœur de tout ce que nous faisons. Ces valeurs guident nos décisions et nos actions au quotidien.
              </p>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/business-consulting-2.jpg"
                alt="Nos Valeurs"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center p-6">
                <h2 className="text-3xl font-bold text-white text-center">
                  Nos Valeurs
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Image + Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:shadow-xl transition-shadow">
            <div className="relative h-96 w-full">
              <Image
                src="/business-consulting-3.jpg"
                alt="Notre Mission"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center p-6">
                <h2 className="text-3xl font-bold text-white text-center">
                  Notre Mission
                </h2>
              </div>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p>
                Notre mission est de fournir des solutions de conseil sur mesure pour aider les entreprises à naviguer dans un environnement en constante évolution et à atteindre leurs objectifs stratégiques.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 4: Text + Image (Additional Section) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:shadow-xl transition-shadow">
            <div className="text-lg text-gray-700 leading-relaxed">
              <p>
                Nous croyons en la puissance de la technologie et de l'innovation pour transformer les entreprises. Nos solutions intègrent les dernières avancées pour garantir des résultats optimaux.
              </p>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/informationSystemsImg.jpg"
                alt="Innovation et Technologie"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center p-6">
                <h2 className="text-3xl font-bold text-white text-center">
                  Innovation et Technologie
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 mb-4"
        >
          Prêt à transformer votre entreprise? Contactez-nous pour découvrir comment nous pouvons vous aider.
        </motion.p>
        <Link
          href="/contact"
          className="inline-flex h-16 items-center justify-center rounded-md bg-green-600 px-12 text-xl font-medium text-white shadow transition-colors hover:bg-green-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
        >
          Contactez-nous
        </Link>
      </motion.div>
    </div>
  );
};

export default NotreIdentite;
