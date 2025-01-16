import React from 'react';
import Link from 'next/link';

const InformationSystems = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">Systèmes d’Information</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
      Les systèmes d'information sont essentiels pour optimiser les processus, améliorer la productivité et offrir une expérience client exceptionnelle. Dans un environnement en constante évolution, une infrastructure informatique robuste et une stratégie SI alignée sur vos objectifs métiers sont des leviers clés pour rester compétitif. Nous vous accompagnons pour moderniser votre infrastructure, renforcer la sécurité de vos données et maximiser la performance de vos systèmes, tout en garantissant une transition fluide et efficace.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Refonte du Schéma Directeur SI</h2>
          <p className="text-gray-600">
            Alignez votre stratégie d'entreprise avec votre stratégie SI grâce à une feuille de route claire et des priorités bien définies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Accompagnement au Choix de Solutions</h2>
          <p className="text-gray-600">
            Nous vous aidons à sélectionner les solutions informatiques adaptées, de la préparation des appels d'offres à la négociation des contrats.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Assistance à Maîtrise d'Ouvrage (MOA)</h2>
          <p className="text-gray-600">
            Définissez vos besoins, supervisez les tests fonctionnels et gérez la mise en production avec notre expertise.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Notre expertise en systèmes d'information garantit des solutions sur mesure, efficaces et pérennes pour répondre à vos besoins spécifiques.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à Moderniser Vos Systèmes d'Information ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Contactez-nous dès aujourd'hui pour optimiser vos systèmes d'information et atteindre vos objectifs stratégiques.
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

export default InformationSystems;