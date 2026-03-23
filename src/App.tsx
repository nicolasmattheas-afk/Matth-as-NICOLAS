/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  Download, 
  ArrowRight, 
  Lock, 
  Zap, 
  Globe,
  Linkedin,
  CheckCircle2,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  ShieldAlert,
  Maximize,
  Minimize,
  Lightbulb,
  Target,
  PieChart,
  TrendingUp,
  Coins
} from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [linkedinCarouselIndex, setLinkedinCarouselIndex] = useState(0);
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [isPlanningFullscreen, setIsPlanningFullscreen] = useState(false);

  const linkedinImages = [
    "https://i.imgur.com/mFWYwjJ.png",
    "https://i.imgur.com/IXzV1Cz.png",
    "https://i.imgur.com/diejB92.png"
  ];

  const slides = [
    {
      id: 1,
      title: "60% des failles IT",
      subtitle: "proviennent d'appareils mobiles.",
      description: "Votre flotte est-elle le maillon faible de votre cybersécurité ? En 2026, protéger les données n'est plus une option.",
      color: "text-red-500",
      icon: <ShieldAlert size={120} className="text-red-500/20" />,
      stat: "60%",
      image: "https://picsum.photos/seed/mobile-security-1/800/800?grayscale"
    },
    {
      id: 2,
      title: "Menaces de 2026",
      subtitle: "Elles ne s'arrêtent plus au bureau.",
      description: "Hausse des malwares, interception de données sur Wi-Fi publics et vol de matériel non chiffré.",
      color: "text-amber-500",
      icon: <AlertTriangle size={120} className="text-amber-500/20" />,
      stat: "Hybride",
      image: "https://picsum.photos/seed/mobile-security-2/800/800?grayscale"
    },
    {
      id: 3,
      title: "Samsung Knox",
      subtitle: "Reprenez le contrôle total.",
      description: "Découvrez notre guide stratégique pour auditer, déployer et sécuriser votre flotte mobile.",
      color: "text-samsung-blue",
      icon: <Lock size={120} className="text-samsung-blue/20" />,
      stat: "Inviolable",
      image: "https://picsum.photos/seed/mobile-security-3/800/800?grayscale"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold tracking-tighter text-samsung-blue">SAMSUNG</div>
              <div className="h-6 w-px bg-gray-300 mx-2" />
              <div className="text-sm font-semibold tracking-widest uppercase text-gray-500">Business</div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#solutions" className="text-sm font-medium hover:text-samsung-blue transition-colors">Solutions</a>
              <a href="#planning" className="text-sm font-medium hover:text-samsung-blue transition-colors">Planning</a>
              <a href="#linkedin" className="text-sm font-medium hover:text-samsung-blue transition-colors">LinkedIn</a>
              <a href="#insights" className="text-sm font-medium hover:text-samsung-blue transition-colors">Insights</a>
              <a href="#budget" className="text-sm font-medium hover:text-samsung-blue transition-colors">Budget</a>
              <button className="bg-samsung-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all">
                Samsung Pro Shop
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4"
          >
            <a href="#solutions" className="block text-lg font-medium">Solutions</a>
            <a href="#planning" className="block text-lg font-medium">Planning</a>
            <a href="#linkedin" className="block text-lg font-medium">LinkedIn</a>
            <a href="#insights" className="block text-lg font-medium">Insights</a>
            <a href="#budget" className="block text-lg font-medium">Budget</a>
            <button className="w-full bg-samsung-blue text-white px-6 py-3 rounded-full text-sm font-bold">
              Samsung Pro Shop
            </button>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="solutions" className="relative h-[90vh] flex items-center overflow-hidden bg-black text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/samsung-s26/1920/1080?grayscale" 
              alt="Galaxy S26 Background" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-samsung-blue/20 border border-samsung-blue text-samsung-blue text-xs font-bold uppercase tracking-widest mb-6">
                Édition Entreprise
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                La nouvelle ère de la productivité est là.
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Découvrez la gamme Galaxy S26. Bien plus qu'un smartphone : le nouveau moteur de vos équipes, propulsé par Galaxy AI et sécurisé par Samsung Knox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                  Précommander maintenant <ArrowRight size={18} />
                </button>
                <button className="border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                  Découvrir les offres B2B
                </button>
              </div>
              <p className="mt-6 text-sm text-gray-400 italic">
                *Offre exclusive : 200€ de remise immédiate sur les versions 512 Go et 1 To.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Planning Section moved up */}
        <section id="planning" className="py-24 bg-samsung-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">Planning de Déploiement</h2>
              <p className="text-lg text-gray-600">
                Suivez les étapes clés du déploiement de votre nouvelle flotte Galaxy S26 en temps réel.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-2 md:p-4 relative group">
              <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => setIsPlanningFullscreen(true)}
                  className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-samsung-blue hover:text-white transition-all flex items-center gap-2 text-sm font-bold"
                >
                  <Maximize size={18} /> Plein écran
                </button>
              </div>
              <iframe 
                src="https://good-ice-cad.notion.site/ebd//32145b9570a580598f1eda4bb7151dc7" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                allowFullScreen 
                className="rounded-2xl"
                title="Planning de Déploiement Gantt"
              />
            </div>

            {/* ENCART STRATÉGIE : PHASAGE */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
                <h4 className="font-bold text-samsung-dark mb-2 flex items-center gap-2">
                  <Lightbulb size={18} className="text-yellow-500" /> Phase 1 : Teasing
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  L'objectif n'est pas de vendre, mais de sensibiliser. En éduquant les DSI sur les failles mobiles via le SEO et l'Employee Advocacy, on prépare le terrain pour le lancement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                <h4 className="font-bold text-samsung-dark mb-2 flex items-center gap-2">
                  <Lightbulb size={18} className="text-green-500" /> Phase 2 : Lancement
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Création d'un effet d'urgence (FOMO) avec une fenêtre de précommande de 14 jours. Concentration du budget média pour générer du trafic direct vers le Pro Shop.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-1 h-full bg-samsung-blue"></div>
                <h4 className="font-bold text-samsung-dark mb-2 flex items-center gap-2">
                  <Lightbulb size={18} className="text-samsung-blue" /> Phase 3 : Nurturing
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Le cycle de décision B2B est long. Cette phase transforme l'intérêt en prospects qualifiés (MQL) via du Gated Content (Livre Blanc) et des cas clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fullscreen Planning Modal */}
        <AnimatePresence>
          {isPlanningFullscreen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex flex-col"
            >
              <div className="p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-samsung-blue p-2 rounded-lg">
                    <Maximize size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Planning de Déploiement - Mode Plein Écran</h3>
                </div>
                <button 
                  onClick={() => setIsPlanningFullscreen(false)}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all flex items-center gap-2 font-bold"
                >
                  Quitter <Minimize size={20} />
                </button>
              </div>
              <div className="flex-grow p-4 sm:p-8">
                <iframe 
                  src="https://good-ice-cad.notion.site/ebd//32145b9570a580598f1eda4bb7151dc7" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  className="rounded-3xl shadow-2xl bg-white"
                  title="Planning de Déploiement Gantt Fullscreen"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LinkedIn Section moved up */}
        <section id="linkedin" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">Suivez-nous sur LinkedIn</h2>
              <p className="text-lg text-gray-600">
                Restez informé des dernières innovations Samsung Business et rejoignez la conversation.
              </p>
            </div>

            {/* ENCART STRATÉGIE : CIBLAGE ADS */}
            <div className="mb-12 bg-samsung-blue/5 border border-samsung-blue/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-shrink-0 bg-samsung-blue text-white p-4 rounded-xl shadow-lg shadow-blue-200">
                <Target size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-samsung-dark mb-2 flex items-center gap-2">
                  Stratégie d'Acquisition B2B <span className="text-sm font-normal text-gray-500">(Budget Alloué : 10 000 €)</span>
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Pour éviter la déperdition de budget sur une cible grand public, ces posts sponsorisés font l'objet d'un ciblage chirurgical (Account-Based Marketing) sur LinkedIn Ads :
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white px-4 py-1.5 rounded-full text-xs font-bold border border-gray-200 text-gray-700 shadow-sm">
                    🏢 ETI & Grands Comptes (+250 emp.)
                  </span>
                  <span className="bg-white px-4 py-1.5 rounded-full text-xs font-bold border border-gray-200 text-gray-700 shadow-sm">
                    👤 DSI, RSSI & Achats IT
                  </span>
                  <span className="bg-white px-4 py-1.5 rounded-full text-xs font-bold border border-gray-200 text-gray-700 shadow-sm">
                    🏥 Finance, Santé, Public, Retail
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Post 1: Carousel */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 flex items-center gap-3 border-b border-gray-100">
                  <div className="w-12 h-12 bg-samsung-blue rounded-lg flex items-center justify-center text-white font-bold">S</div>
                  <div>
                    <div className="font-bold text-sm">Samsung Business France</div>
                    <div className="text-xs text-gray-500">1.2M abonnés • 2h</div>
                  </div>
                </div>
                <div className="p-4 text-sm text-gray-800 whitespace-pre-wrap">
                  {`En 2026, le maillon faible de votre cybersécurité se trouve peut-être déjà dans la poche de vos collaborateurs. Votre flotte mobile est-elle vraiment à l'abri ? 🛡️

Avec la généralisation du travail hybride, le smartphone est devenu le nouveau périmètre à défendre. Protéger les données de votre entreprise n'est plus une option, c'est une urgence.

C'est pourquoi nos experts B2B ont conçu un guide stratégique dédié aux DSI et Responsables IT.

📖 Découvrez notre nouveau Livre Blanc : "Sécurité Mobile 2026 : Déployer une flotte inviolable avec Samsung Knox et la gamme #GalaxyS26".

Ce que vous y apprendrez : 
🔹 L'état des lieux des nouvelles cybermenaces ciblant les professionnels. 
🔹 Comment l'architecture #SamsungKnox (certifiée par les gouvernements) isole et chiffre vos données sensibles de bout en bout. 
🔹 Les étapes clés pour auditer, déployer et gérer votre flotte mobile en maximisant votre ROI.

Ne laissez pas la sécurité de vos données au hasard. Armez vos équipes avec les meilleures solutions du marché.

👉 Téléchargez votre exemplaire gratuit dès maintenant : (lien)

#Cybersécurité #DSI #FlotteMobile #SamsungB2B #Knox`}
                </div>
                <div className="relative aspect-video bg-gray-100 group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={linkedinCarouselIndex}
                      src={linkedinImages[linkedinCarouselIndex]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  <button 
                    onClick={() => setLinkedinCarouselIndex((prev) => (prev - 1 + linkedinImages.length) % linkedinImages.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setLinkedinCarouselIndex((prev) => (prev + 1) % linkedinImages.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {linkedinImages.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === linkedinCarouselIndex ? 'bg-samsung-blue' : 'bg-white/60'}`} />
                    ))}
                  </div>
                </div>
                <div className="p-4 flex justify-between border-t border-gray-100 text-gray-500 text-sm">
                  <div className="flex items-center gap-2 hover:text-samsung-blue cursor-pointer"><Zap size={18} /> J'aime</div>
                  <div className="flex items-center gap-2 hover:text-samsung-blue cursor-pointer"><Globe size={18} /> Commenter</div>
                  <div className="flex items-center gap-2 hover:text-samsung-blue cursor-pointer"><ArrowRight size={18} /> Partager</div>
                </div>
              </div>

              {/* Post 2: Video */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 flex items-center gap-3 border-b border-gray-100">
                  <div className="w-12 h-12 bg-samsung-blue rounded-lg flex items-center justify-center text-white font-bold">S</div>
                  <div>
                    <div className="font-bold text-sm">Samsung Business France</div>
                    <div className="text-xs text-gray-500">1.2M abonnés • 5h</div>
                  </div>
                </div>
                <div className="p-4 text-sm text-gray-800 whitespace-pre-wrap">
                  {`La nouvelle ère de la productivité d'entreprise est officiellement là. 🚀

Directeurs Informatiques, gestionnaires de flottes : vos défis évoluent, vos outils doivent garder une longueur d'avance. Découvrez la nouvelle gamme #GalaxyS26 Édition Entreprise.
Nous avons conçu le Galaxy S26 pour qu'il soit bien plus qu'un smartphone : c'est le nouveau moteur de vos équipes.

Pourquoi le choisir pour votre flotte mobile ? 

✨ Puissance #GalaxyAI : Résumés de réunions, traduction instantanée et assistance à la rédaction pour décupler l'efficacité de vos collaborateurs. 
🔒 Sécurité Défense : Vos données d'entreprise sont protégées de bout en bout grâce à la plateforme inviolable #SamsungKnox. 
💼 Performance et Durabilité : Un processeur ultra-puissant et une autonomie pensée pour les journées de travail les plus intenses.

🎁 OFFRE DE PRÉCOMMANDE EXCLUSIVE B2B : Du 25 février au 10 mars 2026, anticipez les besoins de vos équipes. Précommandez la gamme Galaxy S26 et bénéficiez d'un boost de capacité de stockage (200€ de remise immédiate sur les versions 512 Go et 1 To).*

Vos collaborateurs méritent l'excellence. Votre entreprise exige la sécurité.

👉 Découvrez nos offres et équipez votre flotte dès aujourd'hui sur le Samsung Pro Shop : http://spr.ly/6042hqam0

*Voir modalités sur le site.

#SamsungB2B #Mobilité #Cybersécurité #Innovation`}
                </div>
                <div className="relative aspect-video bg-black">
                  <video 
                    className="w-full h-full"
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    <source src="https://i.imgur.com/TaPk7nV.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
                <div className="p-4 flex justify-between border-t border-gray-100 text-gray-500 text-sm">
                  <div className="flex items-center gap-2 hover:text-samsung-blue cursor-pointer"><Zap size={18} /> J'aime</div>
                  <div className="flex items-center gap-2 hover:text-samsung-blue cursor-pointer"><Globe size={18} /> Commenter</div>
                  <div className="flex items-center gap-2 hover:text-samsung-blue cursor-pointer"><ArrowRight size={18} /> Partager</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="py-24 bg-samsung-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-6">Insights : L'impact de l'IA sur la mobilité B2B</h2>
                <p className="text-gray-400 text-lg">
                  En 2026, le smartphone d'entreprise n'est plus un simple outil de communication : c'est un assistant cognitif à part entière.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex flex-col"
              >
                <div className="aspect-video relative">
                  <img 
                    src="https://i.imgur.com/Af8A8Pu.png"
                    alt="AI Mobility" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-samsung-blue text-xs font-bold px-3 py-1 rounded-full">
                    TENDANCE 2026
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">L'impact de l'IA sur la mobilité d'entreprise en 2026 : Ce que chaque DSI doit anticiper</h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    En 2026, le smartphone d'entreprise n'est plus un simple outil de communication : c'est un assistant cognitif à part entière. Avec l'intégration native de l'Intelligence Artificielle (IA) dans les terminaux mobiles, les professionnels gagnent un temps précieux au quotidien.
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>8 min de lecture</span>
                      <div className="w-1 h-1 bg-gray-700 rounded-full" />
                      <span>Par Experts B2B Samsung</span>
                    </div>
                    <button 
                      onClick={() => setIsArticleOpen(true)}
                      className="bg-samsung-blue text-white font-bold px-6 py-2 rounded-full hover:bg-blue-700 transition-all flex items-center gap-2"
                    >
                      Lire l'article <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    title: "Sécurité Knox : Le rempart ultime contre les cybermenaces IA",
                    desc: "Découvrez comment l'architecture matérielle de Samsung Knox protège vos données critiques en temps réel."
                  },
                  {
                    title: "ROI et Durabilité : Pourquoi investir dans la gamme Galaxy S26 ?",
                    desc: "Analyse des coûts et bénéfices à long terme pour les flottes mobiles d'entreprise."
                  }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-samsung-blue transition-colors">{post.title}</h4>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.desc}</p>
                    <div className="h-px bg-white/10 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Modal */}
        <AnimatePresence>
          {isArticleOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
              <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
                onClick={() => setIsArticleOpen(false)}
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-white text-samsung-dark w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              >
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                  <div className="flex items-center gap-2 text-samsung-blue">
                    <Globe size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Insights B2B</span>
                  </div>
                  <button 
                    onClick={() => setIsArticleOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="overflow-y-auto p-8 sm:p-12">
                  <article className="max-w-3xl mx-auto">
                    <header className="mb-12">
                      <div className="text-samsung-blue font-bold mb-4">TENDANCE 2026</div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        L'impact de l'IA sur la mobilité d'entreprise en 2026 : Ce que chaque DSI doit anticiper
                      </h1>
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span>23 Mars 2026</span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span>8 min de lecture</span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span>Par Experts B2B Samsung</span>
                      </div>
                    </header>

                    {/* ENCART STRATÉGIE : SEO/GEO */}
                    <div className="mb-10 bg-gray-50 border-l-4 border-samsung-blue p-6 rounded-r-2xl">
                      <h4 className="font-bold flex items-center gap-2 mb-2 text-samsung-dark">
                        <Lightbulb size={18} className="text-samsung-blue" />
                        Pourquoi ce format ?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Cet article est optimisé <strong>GEO (Generative Engine Optimization)</strong>. Les décideurs IT interrogeant de plus en plus les IA (ChatGPT, Gemini) pour leurs veilles techniques, ce contenu est structuré avec des listes à puces et des réponses factuelles pour que Samsung soit cité comme source de référence sur la requête "Sécurité IA et Mobilité". De plus, l'approche "Inbound" évite de vendre frontalement le S26, mais positionne l'écosystème Knox comme la seule solution viable.
                      </p>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                      <p className="text-xl font-medium text-samsung-dark leading-relaxed">
                        En 2026, le smartphone d'entreprise n'est plus un simple outil de communication : c'est un assistant cognitif à part entière. Avec l'intégration native de l'Intelligence Artificielle (IA) dans les terminaux mobiles, les professionnels gagnent un temps précieux au quotidien. Cependant, pour les Directeurs des Systèmes d'Information (DSI) et les gestionnaires de flottes, cette révolution soulève une question critique : comment concilier l'hyper-productivité de l'IA avec la sécurité absolue des données de l'entreprise ?
                      </p>

                      <p>
                        Voici une analyse des nouvelles tendances de la mobilité B2B et les solutions pour préparer votre infrastructure.
                      </p>

                      <section>
                        <h2 className="text-2xl font-bold text-samsung-dark mb-4">1. Comment l'IA redéfinit la productivité mobile au travail ?</h2>
                        <p>
                          L'Intelligence Artificielle générative, désormais intégrée directement dans les smartphones (Edge AI), transforme la manière dont les collaborateurs interagissent avec l'information en situation de mobilité.
                        </p>
                        <div className="my-6 bg-samsung-gray p-6 rounded-2xl">
                          <p className="font-bold mb-4">Les trois cas d'usage majeurs en entreprise aujourd'hui sont :</p>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 bg-samsung-blue rounded-full shrink-0" />
                              <span><strong>L'assistance rédactionnelle et la synthèse :</strong> La capacité de résumer automatiquement de longues réunions, de structurer des notes ou de traduire des échanges en temps réel (comme le propose l'écosystème Galaxy AI).</span>
                            </li>
                            <li className="flex gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 bg-samsung-blue rounded-full shrink-0" />
                              <span><strong>L'automatisation des tâches répétitives :</strong> Le tri intelligent des emails urgents ou la planification contextuelle des rendez-vous.</span>
                            </li>
                            <li className="flex gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 bg-samsung-blue rounded-full shrink-0" />
                              <span><strong>La recherche avancée :</strong> Trouver une information précise dans un document PDF ou une image en entourant simplement l'élément à l'écran.</span>
                            </li>
                          </ul>
                        </div>
                        <p className="bg-samsung-blue/5 border-l-4 border-samsung-blue p-4 italic">
                          Le constat pour les entreprises : Équiper ses équipes d'appareils dotés d'IA native n'est plus un luxe, c'est un levier de compétitivité direct.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-2xl font-bold text-samsung-dark mb-4">2. Le grand défi de 2026 : IA et sécurité des données sensibles</h2>
                        <p>
                          Si l'IA booste l'efficacité, elle multiplie également les flux de données traités par l'appareil. Pour les DSI, le risque de fuite d'informations confidentielles n'a jamais été aussi élevé.
                        </p>
                        <div className="my-6 bg-samsung-gray p-6 rounded-2xl">
                          <p className="font-bold mb-4">Pour qu'une flotte mobile IA soit viable, elle doit reposer sur des bases sécuritaires inviolables :</p>
                          <ul className="space-y-4">
                            <li className="flex gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 bg-samsung-blue rounded-full shrink-0" />
                              <span><strong>Le traitement en local (On-device) :</strong> Les meilleures solutions d'IA mobile permettent de traiter les données directement sur la puce du téléphone, sans jamais transiter par le cloud.</span>
                            </li>
                            <li className="flex gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 bg-samsung-blue rounded-full shrink-0" />
                              <span><strong>L'isolation des données professionnelles :</strong> Il est impératif d'utiliser des architectures de sécurité de niveau "Défense". Des plateformes comme Samsung Knox (certifiée par de nombreux gouvernements) permettent de créer un coffre-fort numérique isolant hermétiquement les données personnelles des données de l'entreprise.</span>
                            </li>
                            <li className="flex gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 bg-samsung-blue rounded-full shrink-0" />
                              <span><strong>La protection contre les malwares dopés à l'IA :</strong> Les cyberattaques étant de plus en plus sophistiquées, la sécurité matérielle (au niveau de la puce) devient le seul rempart efficace contre les intrusions en temps réel.</span>
                            </li>
                          </ul>
                        </div>
                      </section>

                      <section>
                        <h2 className="text-2xl font-bold text-samsung-dark mb-4">3. Comment préparer votre flotte mobile pour la nouvelle ère ?</h2>
                        <p>
                          Le renouvellement d'une flotte d'entreprise doit désormais intégrer un critère central : la capacité du matériel (Hardware) à supporter les innovations logicielles (Software) de demain en toute sécurité.
                        </p>
                        <div className="my-6 space-y-6">
                          <p className="font-bold">3 étapes pour les DSI :</p>
                          <div className="grid gap-4">
                            {[
                              { t: "Auditez les usages", d: "Identifiez les départements (commerciaux, cadres dirigeants, équipes terrain) qui bénéficieront le plus de l'IA mobile." },
                              { t: "Exigez des garanties de sécurité multicouches", d: "Ne faites aucun compromis sur la protection de bout en bout (du processeur jusqu'au système d'exploitation)." },
                              { t: "Misez sur la durabilité", d: "Choisissez des appareils garantissant plusieurs années de mises à jour de sécurité et d'OS pour pérenniser votre investissement." }
                            ].map((step, i) => (
                              <div key={i} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                <div className="w-8 h-8 bg-samsung-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">{i+1}</div>
                                <div>
                                  <div className="font-bold text-samsung-dark">{step.t}</div>
                                  <div className="text-sm text-gray-600">{step.d}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>

                      <section className="pt-8 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-samsung-dark mb-4">Conclusion</h2>
                        <p>
                          L'ère de l'intelligence artificielle mobile est à nos portes. Les entreprises qui réussiront cette transition seront celles qui auront su allier la puissance de l'IA à une stratégie de cybersécurité sans faille.
                        </p>
                      </section>
                    </div>
                  </article>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-center">
                  <button 
                    onClick={() => setIsArticleOpen(false)}
                    className="bg-samsung-dark text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all"
                  >
                    Fermer la lecture
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Budget & ROI */}
        <section id="budget" className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6 text-samsung-dark">Budget & Performance</h2>
              <p className="text-lg text-gray-600">
                Une allocation chirurgicale de 10 000 € sur LinkedIn Ads pour maximiser le Retour sur Investissement (ROI).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Répartition du Budget */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-samsung-blue bg-blue-50 shrink-0">
                    60%
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-samsung-dark">Génération de Leads (Livre Blanc)</h4>
                    <p className="text-gray-500 text-sm">6 000 € alloués pour capturer les coordonnées des DSI via notre contenu expert Samsung Knox.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-green-600 bg-green-50 shrink-0">
                    30%
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-samsung-dark">Acquisition (Précommandes)</h4>
                    <p className="text-gray-500 text-sm">3 000 € poussés sur 14 jours pour générer du trafic direct vers l'offre exclusive du Samsung Pro Shop.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-yellow-600 bg-yellow-50 shrink-0">
                    10%
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-samsung-dark">A/B Testing & Retargeting</h4>
                    <p className="text-gray-500 text-sm">1 000 € pour tester nos visuels et recibler les décideurs indécis afin de faire baisser notre Coût d'Acquisition.</p>
                  </div>
                </div>
              </div>

              {/* L'Oeil du Stratège - KPIs */}
              <div className="bg-samsung-dark text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-white/5">
                  <TrendingUp size={200} />
                </div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                  <Lightbulb className="text-yellow-400" /> Objectifs ROI
                </h3>
                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">
                  En B2B, nous ne visons pas le volume de clics, mais la qualité des prospects. Voici les KPIs de performance que nous piloterons chaque semaine pour évaluer la rentabilité de cette campagne de 10 000 € :
                </p>
                
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Cible CPL</div>
                    <div className="text-2xl font-bold text-white">&lt; 35 €</div>
                    <div className="text-xs text-gray-400 mt-1">Coût Par Lead Qualifié</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Cible MQL</div>
                    <div className="text-2xl font-bold text-white">+ 150</div>
                    <div className="text-xs text-gray-400 mt-1">Leads Marketing transmis aux Sales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Prêt à transformer la productivité de vos équipes ?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ne manquez pas notre prochaine grande annonce et découvrez comment les solutions Samsung Édition Entreprise redéfinissent les standards.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-samsung-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Découvrir l'écosystème Samsung Pro
              </button>
              <button className="border-2 border-samsung-dark text-samsung-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-samsung-dark hover:text-white transition-all">
                Contacter un expert
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-samsung-gray py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-1">
              <div className="text-2xl font-bold tracking-tighter text-samsung-blue mb-6">SAMSUNG</div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Solutions innovantes pour les entreprises de toutes tailles. Sécurité, productivité et durabilité au cœur de notre engagement.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Produits</h5>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><a href="#" className="hover:text-samsung-blue">Galaxy S26 Series</a></li>
                <li><a href="#" className="hover:text-samsung-blue">Galaxy Tab Active</a></li>
                <li><a href="#" className="hover:text-samsung-blue">Galaxy Book Pro</a></li>
                <li><a href="#" className="hover:text-samsung-blue">Édition Entreprise</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Solutions</h5>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><a href="#" className="hover:text-samsung-blue">Samsung Knox</a></li>
                <li><a href="#" className="hover:text-samsung-blue">Knox Suite</a></li>
                <li><a href="#" className="hover:text-samsung-blue">Mobilité B2B</a></li>
                <li><a href="#" className="hover:text-samsung-blue">Galaxy AI for Business</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Support</h5>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><a href="#" className="hover:text-samsung-blue">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-samsung-blue">Documentation API</a></li>
                <li><a href="#" className="hover:text-samsung-blue">Contact B2B</a></li>
                <li><a href="#" className="hover:text-samsung-blue">Garantie</a></li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Réseaux</h5>
              <div className="flex gap-4">
                <a 
                  href="https://mattheas-portfolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 cursor-pointer hover:bg-samsung-blue hover:text-white transition-all"
                >
                  <Globe size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mattheas-nicolas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 cursor-pointer hover:bg-samsung-blue hover:text-white transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
            <div className="flex gap-8">
              <span>© 2026 Samsung Electronics. Tous droits réservés.</span>
              <a href="#" className="hover:underline">Confidentialité</a>
              <a href="#" className="hover:underline">Mentions légales</a>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} />
              <span>France / Français</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
