import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Image */}
               <Image
                src={'/service-img/9-1.jpg'}
                alt="Fensterglas Wechsel"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Unsere Dienstleistungen für den Fensterglas-Wechsel umfassen:
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
                <li><strong>Beratung und Analyse:</strong> Wir analysieren Ihren Glasbedarf und beraten Sie umfassend zu den geeigneten Glasarten und Austauschmethoden.</li>
                <li><strong>Fachgerechter Glaswechsel:</strong> Unser Team führt den Glaswechsel mit modernsten Techniken und Werkzeugen durch.</li>
                <li><strong>Dichtungserneuerung:</strong> Wir erneuern die Fensterdichtungen beim Glaswechsel, um optimale Isolierung zu gewährleisten.</li>
                <li><strong>Reparatur und Instandsetzung:</strong> Wir reparieren beschädigte Fensterrahmen und sorgen für eine dauerhafte Lösung nach dem Glaswechsel.</li>
                <li><strong>Individuelle Lösungen:</strong> Ob Isolierglas, Sicherheitsglas oder Sonderverglasungen – wir bieten maßgeschneiderte Lösungen für Ihre Fenster.</li>
            </ul>
              <button className="px-5 mt-10 py-5 max-sm:px-3 max-sm:py-3 bg-[#241d11]">JETZT KONTAKTIEREN</button>
            {/* Google Rating */}
            <div className="mt-6 text-left">
              <p className="text-lg">
              
                <span className="ml-2"></span>
              </p>
            </div>
          </div>
              </div>  

              {/* sections */}
          <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24  ">
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Beratung und Analyse:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Wir analysieren Ihren Glasbedarf und entwickeln einen detaillierten Plan für den optimalen Glaswechsel Ihrer Fenster.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/service-img/ap-1.jpg"
    alt="Service"
    className="w-full h-full object-cover"
  />
</div>

        </div>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Fachgerechter Glaswechsel:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unsere Experten führen den Glaswechsel mit präzisen Techniken durch, um eine perfekte Funktion und Dichtheit Ihrer Fenster zu gewährleisten.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/service-img/ap-2.jpeg"
    alt="Service"
    className="w-full h-full object-cover"
  />
</div>
        </div>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Dichtungserneuerung:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Wir erneuern die Fensterdichtungen beim Glaswechsel, um optimale Wärme- und Schalldämmung Ihrer Fenster sicherzustellen.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/service-img/9-4.jpg"
    alt="Service"
    className="w-full h-full object-cover"
  />
</div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
}

export default Page;