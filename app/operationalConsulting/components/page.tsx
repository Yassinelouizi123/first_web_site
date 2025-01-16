import React from 'react';
import Link from 'next/link';

const OperationalConsulting = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">Conseil Opérationnel</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        L'amélioration de la performance opérationnelle est essentielle pour garantir la compétitivité et la rentabilité de votre entreprise. Nous vous accompagnons dans l'optimisation de vos processus, l'amélioration de l'efficacité et la gestion des risques pour atteindre vos objectifs stratégiques.
      </p>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Que vous cherchiez à optimiser vos fonctions support, améliorer vos processus métier ou renforcer votre conformité réglementaire, nous vous offrons des solutions sur mesure pour répondre à vos besoins spécifiques.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Diagnostic des Fonctions Support et Métiers</h2>
          <p className="text-gray-600">
            Nous réalisons un diagnostic approfondi pour identifier les points d'amélioration et les opportunités d'optimisation dans vos fonctions support et métiers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Optimisation des Processus</h2>
          <p className="text-gray-600">
            Nous vous aidons à optimiser vos processus et procédures pour améliorer l'efficacité opérationnelle et réduire les coûts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Gestion des Risques & Conformité</h2>
          <p className="text-gray-600">
            Nous vous accompagnons dans la gestion des risques et la mise en conformité réglementaire pour garantir la sécurité et la pérennité de vos opérations.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Avec une expertise reconnue en conseil opérationnel, nous avons accompagné de nombreuses entreprises dans l'optimisation de leurs processus et l'amélioration de leur performance. Notre approche personnalisée et notre engagement envers l'excellence font de nous un partenaire de choix.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à Améliorer Votre Performance Opérationnelle ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ne laissez pas les inefficacités freiner votre croissance. Contactez-nous dès aujourd'hui pour optimiser vos opérations et atteindre vos objectifs stratégiques.
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

export default OperationalConsulting;