import React from 'react';
import Link from 'next/link';

const StrategicConsulting = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">Conseil Stratégique</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Une stratégie claire et bien définie est essentielle pour assurer la croissance et la pérennité de votre entreprise. Nous vous accompagnons dans la définition et la mise en œuvre de projets structurants, alignés sur vos objectifs à long terme.
      </p>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Que vous cherchiez à explorer de nouvelles opportunités, optimiser vos opérations ou transformer votre modèle d'affaires, notre expertise vous aide à prendre des décisions éclairées et à atteindre vos objectifs stratégiques.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Diagnostic Stratégique</h2>
          <p className="text-gray-600">
            Nous réalisons un diagnostic approfondi pour identifier vos forces, faiblesses, opportunités et menaces, et définir une stratégie adaptée à vos besoins.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Feuille de Route Stratégique</h2>
          <p className="text-gray-600">
            Nous vous aidons à élaborer une feuille de route claire, en identifiant les étapes clés et les ressources nécessaires pour atteindre vos objectifs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Études d'Opportunité et de Faisabilité</h2>
          <p className="text-gray-600">
            Nous menons des études approfondies pour évaluer la viabilité de nouveaux projets, en tenant compte des aspects techniques, financiers et opérationnels.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Avec une expertise reconnue en conseil stratégique, nous vous accompagnons dans la réalisation de vos projets les plus ambitieux. Notre approche personnalisée et notre engagement envers l'excellence font de nous un partenaire de choix.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à Transformer Votre Stratégie ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ne laissez pas les défis stratégiques freiner votre croissance. Contactez-nous dès aujourd'hui pour définir et mettre en œuvre une stratégie gagnante pour votre entreprise.
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

export default StrategicConsulting;