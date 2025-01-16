import React from 'react';
import Link from 'next/link';

const ManagementConsulting = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">Conseil en Management et Organisation</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Un management efficace et une organisation bien structurée sont essentiels pour réussir dans un environnement compétitif. Nous vous aidons à optimiser vos processus, à aligner votre structure sur vos objectifs stratégiques et à favoriser une croissance durable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Optimisation des Processus</h2>
          <p className="text-gray-600">
            Simplifiez vos opérations, réduisez les coûts et améliorez la productivité.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Design Organisationnel</h2>
          <p className="text-gray-600">
            Redéfinissez votre organisation pour la rendre agile et alignée sur votre stratégie.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Gestion du Changement</h2>
          <p className="text-gray-600">
            Assurez des transitions fluides et maximisez l'adoption lors des changements organisationnels.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Nous proposons des solutions sur mesure pour vous aider à atteindre une croissance durable et une excellence organisationnelle.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à Transformer Votre Organisation ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Contactez-nous dès aujourd'hui pour optimiser vos processus de management et votre structure organisationnelle.
        </p>
        <Link
          href="/contact"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  );
};

export default ManagementConsulting;