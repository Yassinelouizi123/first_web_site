import React from 'react';
import Link from 'next/link';

const ProjectProgramSupport = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">Accompagnement sur les Projets & Programmes</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        La réussite des projets et programmes est essentielle pour la transformation et la croissance de votre entreprise. Nous vous accompagnons dans la gestion et la réalisation de vos projets, en assurant une coordination efficace et une mise en œuvre réussie.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Structuration des Programmes</h2>
          <p className="text-gray-600">
            Définissez le portefeuille de projets, la gouvernance et les jalons clés pour une mise en œuvre réussie.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Project Management Office (PMO)</h2>
          <p className="text-gray-600">
            Mettez en place un bureau de gestion de projet (PMO) pour coordonner les parties prenantes et gérer les plannings et budgets.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Accompagnement à la Réalisation des Projets</h2>
          <p className="text-gray-600">
            Assurez une gestion efficace des ressources, des risques et des délais pour atteindre vos objectifs.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Projets Déployés</h2>
        <p className="text-lg text-gray-700 mb-6">
          Nos consultants ont déployé des projets variés dans divers secteurs. Voici quelques exemples :
        </p>
        <ul className="text-left list-disc list-inside max-w-2xl mx-auto text-gray-600">
          <li>PMO d’un portefeuille de projets IT pour la digitalisation des processus d'une banque de détail.</li>
          <li>PMO Programme – Feuille de route Retail d’une banque nationale.</li>
          <li>Accompagnement au déploiement d’un outil de reporting dans 23 filiales à travers le monde pour une assurance française.</li>
          <li>PMO d’un portefeuille de projets industriels pour un grand groupe minier.</li>
          <li>Accompagnement MOA et MOE sur des projets de digitalisation des processus et intégration d’outils de workflows.</li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Notre expertise reconnue dans l'accompagnement de projets et programmes fait de nous un partenaire de choix pour vos initiatives stratégiques.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à Transformer Vos Projets en Réussites ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Contactez-nous dès aujourd'hui pour réussir vos projets et programmes.
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

export default ProjectProgramSupport;