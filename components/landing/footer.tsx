import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">À propos de nous</h3>
            <p className="text-sm">
              Upmind Business Consulting est un cabinet de conseil en management et organisation à Casablanca, spécialisé dans l'accompagnement sur les programmes et projets structurants.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/notreIdntite" className="hover:text-secondary">
                  Notre identité
                </Link>
              </li>
              <li>
                <Link href="/#services-section" className="hover:text-secondary">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/strategicConsulting" className="hover:text-secondary">
                  Conseil Stratégique
                </Link>
              </li>
              <li>
                <Link href="/operationalConsulting" className="hover:text-secondary">
                  Conseil Opérationnel
                </Link>
              </li>
              <li>
                <Link href="/projectSupport" className="hover:text-secondary">
                  Accompagnement sur les projets & programmes
                </Link>
              </li>
              <li>
                <Link href="/humanCapital" className="hover:text-secondary">
                  Capital Humain et Conduite de Changement
                </Link>
              </li>
              <li>
                <Link href="/informationSystems" className="hover:text-secondary">
                  Systèmes d'Information & Monétique
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm mb-2">123 Rue Example, Casablanca, Maroc</p>
            <p className="text-sm mb-2">Téléphone: +212 661 767 062</p>
            <p className="text-sm mb-4">Email: contact@upmind.ma</p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <Facebook />
              </a>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <Twitter />
              </a>
              <a
                href="http://www.linkedin.com/company/upmind-business-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}