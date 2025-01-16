import React from 'react';
import Link from 'next/link';

const HumanCapitalChangeManagement = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">Capital Humain et Conduite de Changement</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Le capital humain est au cœur de la réussite de toute entreprise. Nous vous accompagnons dans la gestion des ressources humaines et la conduite de changement pour garantir la performance de votre organisation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Diagnostic et Refonte RH</h2>
          <p className="text-gray-600">
            Nous réalisons un diagnostic approfondi de votre politique RH et vous accompagnons dans la refonte de votre schéma directeur RH pour aligner vos ressources humaines sur vos objectifs stratégiques.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Gestion Prévisionnelle des Emplois et des Compétences (GPEC)</h2>
          <p className="text-gray-600">
            Nous vous aidons à mettre en place une GPEC pour anticiper les besoins en compétences et en emplois, et pour assurer une gestion proactive de vos ressources humaines.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Conduite de Changement</h2>
          <p className="text-gray-600">
            Nous vous accompagnons dans la conduite de changement pour garantir une transition fluide et réussie, en minimisant les résistances et en maximisant l'adhésion de vos collaborateurs.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Avec une expertise reconnue dans le capital humain et la conduite de changement, nous avons accompagné de nombreuses entreprises dans la transformation de leurs ressources humaines. Notre approche personnalisée et notre engagement envers l'excellence font de nous un partenaire de choix pour vos projets RH.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à Transformer Vos Ressources Humaines ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons vous aider à optimiser votre capital humain et à réussir vos transformations.
        </p>
        <Link
          href="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  );
};

export default HumanCapitalChangeManagement;