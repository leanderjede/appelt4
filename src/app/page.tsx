'use client'

import { motion, AnimatePresence } from "framer-motion";
import PartnerSlider from "./component/Ui/PartnerSwiper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TestimonialsSlider from "./component/Ui/ReviewSlider";

const images = [
  "/slider/s1.jpg",
"/slider/s2.jpg",
"/slider/s3.jpg",
"/slider/s4.jpg",
"/slider/s5.jpg",
"/slider/s6.jpg",
"/slider/s7.jpg",
"/slider/s8.jpg",
"/slider/s9.jpg",
"/slider/s10.jpg",
"/slider/s11.jpg",
];

const services = [
  {
    title: "Kostenlose Erstberatung und Besichtigung vor Ort",
    link: "/service/Kostenlose",
    description: "Wir bieten Ihnen eine kostenlose Erstberatung und Besichtigung vor Ort, um Ihre Anforderungen genau zu verstehen und maßgeschneiderte Lösungen zu entwickeln.",
    imageUrl: "/navimg/download.jpg"
  },
  {
    title: "Trockenbau- und Putzarbeiten",
    link: "/service/trockenbau-putzarbeiten",
    description: "Professionelle Trockenbau- und Putzarbeiten zur Gestaltung und Renovierung Ihrer Räume mit hochwertigen Materialien.",
    imageUrl: "/navimg/2.jpg"
  },
  {
    title: "Malerarbeiten",
    link: "/service/malerarbeiten",
    description: "Fachgerechte Malerarbeiten für Innen- und Außenbereiche, die Ihrem Raum neues Leben verleihen.",
    imageUrl: "/navimg/3.jpg"
  },
  {
    title: "Verlegen von medizinischen PVC-Böden",
    link: "/service/medizinische-pvc-boeden",
    description: "Spezialisierte Verlegung von medizinischen PVC-Böden für sterile und hygienische Umgebungen.",
    imageUrl: "/navimg/4.jpg"
  },
  {
    title: "Verlegen von Bodenfliesen",
    link: "/service/bodenfliesen",
    description: "Präzises Verlegen von Bodenfliesen für eine langlebige und ästhetische Bodenlösung.",
    imageUrl: "/navimg/5.jpg"
  },
  {
    title: "Gießen von Estrichböden sowie Ausgleichsmasse",
    link: "/service/estrichboeden-ausgleichsmasse",
    description: "Fachgerechtes Gießen von Estrichböden und Ausgleichsmasse für ebene und belastbare Untergründe.",
    imageUrl: "/navimg/6.jpg"
  },
  {
    title: "Verlegen von Holzböden (Dielen, Parkett)",
    link: "/service/holzboden-verlegen",
    description: "Verlegung hochwertiger Holzböden wie Dielen und Parkett für ein edles Ambiente.",
    imageUrl: "/navimg/7.jpg"
  },
  {
    title: "Verlegen von Laminat- und Vinylböden",
    link: "/service/laminat-vinylboden",
    description: "Robuste Laminat- und Vinylböden für eine strapazierfähige und pflegeleichte Lösung.",
    imageUrl: "/navimg/8.jpg"
  },
  {
    title: "Verlegen von PVC-Böden",
    link: "/service/pvc-boeden",
    description: "Kostengünstige und praktische PVC-Böden für verschiedene Anwendungsbereiche.",
    imageUrl: "/navimg/9.jpg"
  },
  {
    title: "Mauerwerkstrockenlegung",
    link: "/service/mauerwerkstrockenlegung",
    description: "Effiziente Trockenlegung von feuchtem Mauerwerk zur Vermeidung von Feuchtigkeitsschäden.",
    imageUrl: "/navimg/10.jpg"
  },
  {
    title: "Deckenbalkensanierung",
    link: "/service/deckenbalkensanierung",
    description: "Sanierung und Instandsetzung beschädigter Deckenbalken für stabile und sichere Strukturen."
  },
  {
    title: "Bekämpfung von Pilz- und Schädlingsbefall",
    link: "/service/pilz-schaedlingsbekaempfung",
    description: "Spezialisierte Bekämpfung von Pilz- und Schädlingsbefall zur Erhaltung der Bausubstanz."
  },

];
/* 
 {
    title: "Kostenlose Erstberatung und Besichtigung vor Ort",
    link: "/services/erstberatung",
    description: "Wir bieten Ihnen eine kostenlose Erstberatung und Besichtigung vor Ort, um Ihre Anforderungen genau zu verstehen und maßgeschneiderte Lösungen zu entwickeln."
  },
  {
    title: "Trockenbau- und Putzarbeiten",
    link: "/services/trockenbau-putzarbeiten",
    description: "Professionelle Trockenbau- und Putzarbeiten zur Gestaltung und Renovierung Ihrer Räume mit hochwertigen Materialien."
  },
  {
    title: "Malerarbeiten",
    link: "/services/malerarbeiten",
    description: "Fachgerechte Malerarbeiten für Innen- und Außenbereiche, die Ihrem Raum neues Leben verleihen."
  },
  {
    title: "Verlegen von medizinischen PVC-Böden",
    link: "/services/medizinische-pvc-boeden",
    description: "Spezialisierte Verlegung von medizinischen PVC-Böden für sterile und hygienische Umgebungen."
  },
  {
    title: "Verlegen von Bodenfliesen",
    link: "/services/bodenfliesen",
    description: "Präzises Verlegen von Bodenfliesen für eine langlebige und ästhetische Bodenlösung."
  },
  {
    title: "Gießen von Estrichböden sowie Ausgleichsmasse",
    link: "/services/estrichboeden-ausgleichsmasse",
    description: "Fachgerechtes Gießen von Estrichböden und Ausgleichsmasse für ebene und belastbare Untergründe."
  },
  {
    title: "Verlegen von Holzböden (Dielen, Parkett)",
    link: "/services/holzboden-verlegen",
    description: "Verlegung hochwertiger Holzböden wie Dielen und Parkett für ein edles Ambiente."
  },
  {
    title: "Verlegen von Laminat- und Vinylböden",
    link: "/services/laminat-vinylboden",
    description: "Robuste Laminat- und Vinylböden für eine strapazierfähige und pflegeleichte Lösung."
  },
  {
    title: "Verlegen von PVC-Böden",
    link: "/services/pvc-boeden",
    description: "Kostengünstige und praktische PVC-Böden für verschiedene Anwendungsbereiche."
  },
  {
    title: "Mauerwerkstrockenlegung",
    link: "/services/mauerwerkstrockenlegung",
    description: "Effiziente Trockenlegung von feuchtem Mauerwerk zur Vermeidung von Feuchtigkeitsschäden."
  },
  {
    title: "Deckenbalkensanierung",
    link: "/services/deckenbalkensanierung",
    description: "Sanierung und Instandsetzung beschädigter Deckenbalken für stabile und sichere Strukturen."
  },
  {
    title: "Bekämpfung von Pilz- und Schädlingsbefall",
    link: "/services/pilz-schaedlingsbekaempfung",
    description: "Spezialisierte Bekämpfung von Pilz- und Schädlingsbefall zur Erhaltung der Bausubstanz."
  },
  {
    title: "Einbau von Fenster- und Türenelementen",
    link: "/services/fenster-tueren-einbau",
    description: "Montage hochwertiger Fenster- und Türenelemente für optimale Isolation und Sicherheit."
  },
  {
    title: "Einbau von Dachfenstern",
    link: "/services/dachfenster-einbau",
    description: "Installation moderner Dachfenster für verbesserten Lichteinfall und Belüftung."
  },
  {
    title: "Wechsel von Fensterglas",
    link: "/services/fensterglas-wechsel",
    description: "Schneller und präziser Austausch von Fensterglas bei Beschädigung oder zur Energieeinsparung."
  },
  {
    title: "Aufbereitung von Kastendoppelfenstern",
    link: "/services/kastendoppelfenster-aufbereitung",
    description: "Renovierung und Aufbereitung von Kastendoppelfenstern zur Erhaltung des historischen Charakters."
  },
  {
    title: "Einfräsen von Fenster-Dichtungen",
    link: "/services/fenster-dichtungen-einfraesen",
    description: "Nachträgliches Einfräsen von Fenster-Dichtungen zur Verbesserung der Wärmedämmung."
  },
  {
    title: "Montage von Markisen und Rollladen",
    link: "/services/markisen-rollladen-montage",
    description: "Montage von Markisen und Rollläden für Sonnenschutz und Sichtschutz."
  },
  {
    title: "Aufbereitung von Holzböden",
    link: "/services/holzboden-aufbereitung",
    description: "Professionelle Aufbereitung von Holzböden zur Verlängerung der Lebensdauer und Erneuerung des Erscheinungsbildes."
  },
  {
    title: "Terrassenbau",
    link: "/services/terrassenbau",
    description: "Individueller Terrassenbau für Ihren Garten oder Außenbereich."
  },
  {
    title: "Pflasterarbeiten / Garten- und Landschaftsbau",
    link: "/services/pflasterarbeiten-gartenbau",
    description: "Professionelle Pflasterarbeiten und Gestaltung im Garten- und Landschaftsbau."
  },
  {
    title: "Terrassenüberdachungen",
    link: "/services/terrassenueberdachungen",
    description: "Montage robuster Terrassenüberdachungen für Wetterschutz und Komfort."
  },
  {
    title: "Montage von Carports",
    link: "/services/carports-montage",
    description: "Montage von Carports für den Schutz Ihrer Fahrzeuge vor Witterungseinflüssen."
  },
  {
    title: "Dachabdichtungen sowie Entwässerung",
    link: "/services/dachabdichtungen-entwaesserung",
    description: "Dachabdichtungen und Entwässerungssysteme zum Schutz vor Feuchtigkeitsschäden."
  },
  {
    title: "Montage von Solaranlagen",
    link: "/services/solaranlagen-montage",
    description: "Installation von Solaranlagen zur Nutzung erneuerbarer Energien."
  },
  {
    title: "Energetische Sanierung",
    link: "/services/energetische-sanierung",
    description: "Energetische Sanierung für eine nachhaltige Reduzierung des Energieverbrauchs."
  },
  {
    title: "Baubetreuung",
    link: "/services/baubetreuung",
    description: "Umfassende Baubetreuung für eine reibungslose Abwicklung Ihres Bauvorhabens."
  }
**/



export default function Home() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };



  const viewportSettings = {
    once: true,
    margin: "0px 0px -100px 0px"
  };

  return (
    <div className="bg-[#f8f5f0]">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div> {/* Black background layer */}

      <AnimatePresence mode="wait">
        <motion.div
          key={images[current]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[current]}
            alt="Hero Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#01010162] px-4 md:px-12 flex items-center">
        <motion.div
          className="text-white max-w-3xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Willkommen bei Appelt-Bauservice!
          </h1>
          <p className="mt-4 md:text-lg text-sm leading-relaxed">
            Ihr Zuhause verdient das Beste – wir bauen nicht nur Wände, sondern schaffen Räume zum Leben.
          </p>
          <button
            className="mt-8 px-6 py-3 bg-amber-900 hover:bg-[#6b5733] text-white font-bold rounded-lg shadow-lg transition-all duration-300"
            onClick={() => router.push("/contact")}
          >
            Kontaktieren Sie uns
          </button>
        </motion.div>
      </div>
    </div>

      {/* About Section */}
      <section className="bg-[#f8f5f0] py-12 md:py-20">
        <div className="container px-6 py-10 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl font-semibold text-[#473a22] lg:text-4xl"
              variants={slideInFromLeft}
            >
              Bau von Träumen, Handwerksqualität - Appelt Konstruktion & Renovierung
              <span className="block w-20 h-1 mt-2 bg-[#8e7444] rounded-full"></span>
            </motion.h1>

            <motion.p 
              className="mt-4 text-[#6b5733] xl:mt-6"
              variants={fadeIn}
            >
              Vertrauen entsteht durch Offenheit – deshalb ist Transparenz ein zentraler Bestandteil unserer Arbeit. Von der ersten Beratung bis zur Fertigstellung legen wir Wert auf klare Kommunikation.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
              variants={containerVariants}
            >
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  ),
                  title: "Effizienz",
                  description: "Wir sind eine innovative Zimmerei, die Design, Nachhaltigkeit und modernste Fertigungstechnologien vereint. Durch den gezielten Einsatz hochwertiger Materialien und effizienter Produktionsmethoden optimieren wir Zeit und Ergebnisse."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  ),
                  title: "Erfahrung",
                  description: "Unsere langjährige Erfahrung und fundierte Fachkompetenz im Zimmererhandwerk ermöglichen es uns, maßgeschneiderte Lösungen für unterschiedlichste Bauprojekte zu realisieren."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                  title: "Transparenz",
                  description: "Vertrauen entsteht durch Offenheit – deshalb ist Transparenz ein zentraler Bestandteil unserer Arbeit. Von der ersten Beratung bis zur Fertigstellung legen wir Wert auf klare Kommunikation."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="p-8 space-y-3 border-2 border-[#c1a777] bg-[#f8f5f0] rounded-xl shadow-lg hover:shadow-[#d1bd99]/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                >
                  <span className="inline-block text-[#8e7444]">
                    {feature.icon}
                  </span>
                  <h1 className="text-2xl font-semibold text-[#473a22]">
                    {feature.title}
                  </h1>
                  <p className="text-[#6b5733]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <div className="bg-wood-200 px-2 py-10 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: "url('https://img.freepik.com/fotos-kostenlos/heller-holzboden_53876-92981.jpg?t=st=1745090154~exp=1745093754~hmac=4790ac17a1c0b58e2301a9126788ec3aafe61fe2938b1050dd6448b9c65196ea&w=996')" }}>
        <div id="features" className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={containerVariants}
          >
            <motion.p 
              className="text-center text-base font-semibold leading-7 text-white"
              variants={fadeIn}
            >
        
            </motion.p>
            
            <motion.h2
  className="text-center font-display text-3xl font-bold tracking-tight text-black md:text-4xl"
  variants={slideInFromRight}
>
  Alles aus einer Hand
</motion.h2>

            
            <motion.ul 
              className="mt-16 grid grid-cols-1 gap-6 text-center md:grid-cols-2 xl:grid-cols-3"
              variants={containerVariants}
            >
              {services.map((item, index) => (
             <motion.li
             key={index}
             className="group rounded-xl cursor-pointer  bg-[url('/n4.jpeg')] bg-cover bg-center px-6 py-8 shadow-sm transition-all duration-300 ease-in-out hover:border-2 hover:border-[#efc987] hover:shadow-lg"
             onClick={() => router.push(item.link)}
             variants={itemVariants}
             whileHover={{ scale: 1.03 }}
           >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 mx-auto transition-colors duration-300 group-hover:text-[#efc987]"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                
                  <h3 className="my-3 font-display  text-[#473a22] font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-black font-semibold">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Partner Slider */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeIn}
      >
        <PartnerSlider />
      </motion.div>

      {/* Gallery Section */}
      <section className="bg-[#f8f5f0] py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={containerVariants}
          >
            <motion.div 
              className="text-center mb-8 lg:mb-16"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-[#473a22] md:text-4xl">
                Ein Einblick in unsere tägliche Arbeit
              </h2>
              <div className="w-16 h-1 bg-[#8e7444] mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
            >
              {[2, 3, 4,  5, 6, 7, 8, 10, 11, 12, 13].map((num, index) => (
                <motion.div 
                  key={index}
                  className="flex justify-center items-center overflow-hidden rounded-lg shadow-lg hover:shadow-[#d1bd99]/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.img
                    src={`/img/${num}.webp`}
                    alt={`Work Image ${index + 1}`}
                    className="w-full h-52 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#f8f5f0] py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={containerVariants}
          >
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-[#473a22]">
                So arbeiten wir
              </p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#473a22] sm:text-4xl lg:text-5xl">
                Starte dein Projekt in 4 einfachen Schritten
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-[#473a22] lg:text-xl lg:leading-8">
                Beginne mit uns und realisiere dein Vorhaben in nur 4 einfachen Schritten.
              </p>
            </motion.div>

            <motion.ul 
              className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4"
              variants={containerVariants}
            >
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5" />
                    </svg>
                  ),
                  title: "Kontaktaufnahme",
                  description: "Nimm unverbindlich Kontakt mit uns auf. Wir besprechen deine Anforderungen und Wünsche."
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z" />
                    </svg>
                  ),
                  title: "Kostenlose Erstberatung",
                  description: "Erhalte eine kostenlose Beratung und eine Erstbesichtigung vor Ort. Gemeinsam planen wir die nächsten Schritte."
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2" />
                    </svg>
                  ),
                  title: "Angebot & Planung",
                  description: "Basierend auf der Beratung erstellen wir ein maßgeschneidertes Angebot und planen die Umsetzung."
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z" />
                    </svg>
                  ),
                  title: "Umsetzung & Fertigstellung",
                  description: "Unser erfahrenes Team führt die Arbeiten professionell und termingerecht durch. Du erhältst ein hochwertiges Ergebnis."
                }
              ].map((step, index) => (
                <motion.li 
                  key={index}
                  className="flex-start group relative flex lg:flex-col bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                >
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#c1a777] bg-[#f8f5f0] text-[#8e7444] group-hover:border-[#473a22] group-hover:bg-[#473a22] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-6">
                    <h3 className="text-xl font-bold text-[#473a22] before:mb-2 before:block before:font-mono before:text-sm before:text-[#8e7444]">
                      {step.title}
                    </h3>
                    <h4 className="mt-2 text-base text-[#6b5733]">
                      {step.description}
                    </h4>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      <TestimonialsSlider/>
    </div>
  );
}