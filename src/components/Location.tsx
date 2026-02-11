import React from 'react';
import { MapPin, Navigation, Car, Ship, Waves } from 'lucide-react';
import { siteConfig, content } from '../data/content';

interface LocationProps {
  currentLanguage: 'hr' | 'en' | 'it';
}

const Location: React.FC<LocationProps> = ({ currentLanguage }) => {
  const nav = content.navigation[currentLanguage];
  const isItalian = currentLanguage === 'it';
  const isCroatian = currentLanguage === 'hr';

  return (
    <section id="location" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {nav.location}
          </h2>
          <p className="text-lg text-gray-600">
            {isCroatian
              ? 'Smješteni blizu mora, Apartmani Markota pružaju jednostavan pristup lokalnim atrakcijama i prekrasnim plažama.'
              : isItalian
                ? 'Situati vicino al mare, gli Appartamenti Markota offrono un facile accesso alle attrazioni locali e alle splendide spiagge.'
                : 'Located near the sea, Apartmani Markota provide easy access to local attractions and beautiful beaches.'}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Map and Address */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                className="md:h-[520px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.1234567890!2d16.8009027!3d42.906447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a6c1368849825%3A0xfe0fced819adf75d!2sPri%C5%BEba%2054%2C%2020271%2C%20Blato!5e0!3m2!1sen!2shr!4v1644507200000"
              />
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin size={24} className="text-blue-600 mr-2" />
                {isCroatian ? 'Adresa' : isItalian ? 'Indirizzo' : 'Address'}
              </h3>
              <p className="text-gray-600 mb-4">{siteConfig.contact.address}</p>
              <a
                href={`https://www.google.com/maps/place/Pri%C5%BEba+54,+20271,+Blato/@42.9060756,16.8002064,207m/data=!3m1!1e3!4m6!3m5!1s0x134a6c1368849825:0xfe0fced819adf75d!8m2!3d42.906447!4d16.8009027!16s%2Fg%2F11pzx9jlq6!5m1!1e1?entry=ttu`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Navigation size={16} />
                <span>
                  {isCroatian
                    ? 'Otvori na mapama'
                    : isItalian
                      ? 'Apri su Maps'
                      : 'Open in Maps'}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Attractions and How to Get Here */}
          <div className="space-y-6">
            {/* <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {isCroatian
                  ? 'Obližnje Atrakcije'
                  : isItalian
                    ? 'Attrazioni vicine'
                    : 'Nearby Attractions'}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {isCroatian
                      ? 'Blato - centar'
                      : isItalian
                        ? 'Blato - centro'
                        : 'Blato - town center'}
                  </span>
                  <span className="text-sm text-gray-500">5 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {isCroatian
                      ? 'Korčula - grad'
                      : isItalian
                        ? 'Korčula - città'
                        : 'Korčula - town'}
                  </span>
                  <span className="text-sm text-gray-500">30 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {isCroatian
                      ? 'Plaža Lombarda'
                      : isItalian
                        ? 'Spiaggia Lombarda'
                        : 'Lombarda Beach'}
                  </span>
                  <span className="text-sm text-gray-500">2 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {isCroatian
                      ? 'Luka Neretva'
                      : isItalian
                        ? 'Porto Neretva'
                        : 'Neretva Port'}
                  </span>
                  <span className="text-sm text-gray-500">20 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {isCroatian
                      ? 'Nacionalni park Mljet'
                      : isItalian
                        ? 'Parco nazionale di Meleda'
                        : 'Mljet National Park'}
                  </span>
                  <span className="text-sm text-gray-500">25 km</span>
                </div>
              </div>
            </div> */}

            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                {isCroatian
                  ? 'Kako doći do nas?'
                  : isItalian
                    ? 'Come arrivare?'
                    : 'How to Get Here?'}
              </h3>
              <div className="space-y-2 md:space-y-3 text-gray-600">
                <p>
                  <strong className="flex items-center gap-1 md:gap-2">
                    <div className="bg-green-100 rounded-lg p-1 md:p-2">
                      <Car size={16} className="md:w-5 md:h-5 text-green-600" />
                    </div>
                    {isCroatian
                      ? 'Automobilom (najčešća opcija):'
                      : isItalian
                        ? 'In auto (opzione più comune):'
                        : 'By Car (most common):'}
                  </strong>{' '}
                  {isCroatian ? (
                    <div className="space-y-3">
                      <p>
                        Vozite preko Pelješkog mosta (spoj D8 i D414 preko
                        Pelješca). Dolaskom u Orebić ukrcajte se na trajekt
                        Orebić - Dominče (Korčula) - plovidba traje oko 15-20
                        min.{' '}
                        <span className="font-semibold">
                          Nakon iskrcaja u Dominču (Korčula):
                        </span>{' '}
                        nastavite cestom prema Blatu, a zatim skrenite za Prižbu
                        (oko 30 min).
                      </p>
                    </div>
                  ) : isItalian ? (
                    <div className="space-y-3">
                      <p>
                        Guida sul ponte di Peliešac (collegamento D8 e D414 su
                        Peliešac). Arrivati a Orebić, salite sul traghetto
                        Orebić-Dominče (Curzola) – il viaggio dura circa 15-20
                        minuti.{' '}
                        <span className="font-semibold">
                          Dopo lo sbarco a Dominče (Curzola):
                        </span>{' '}
                        continuate verso Blato, quindi girate verso Prižba.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p>
                        Drive over the Pelješac Bridge (D8 and D414 junction
                        over Pelješac). Upon arrival in Orebić, board the ferry
                        Orebić-Dominče (Korčula) – crossing takes about 15-20
                        minutes.{' '}
                        <span className="font-semibold">
                          After disembarking in Dominče (Korčula):
                        </span>{' '}
                        continue towards Blato, then turn for Prižba.
                      </p>
                    </div>
                  )}
                </p>
                <p>
                  <strong className="flex items-center gap-1 md:gap-2">
                    <div className="bg-purple-100 rounded-lg p-1 md:p-2">
                      <Ship
                        size={16}
                        className="md:w-5 md:h-5 text-purple-600"
                      />
                    </div>
                    {isCroatian
                      ? 'Trajektom iz Splita:'
                      : isItalian
                        ? 'Traghetto da Spalato:'
                        : 'Ferry from Split:'}
                  </strong>{' '}
                  {isCroatian ? (
                    <div className="space-y-3">
                      <p>
                        Iz Splita možete uhvatiti trajekt do Vela Luke (západna
                        strana Korčule). Put traje oko 2 h 20 min – 3 h 05 min
                        (ovisno o liniji).{' '}
                        <span className="font-semibold">
                          Nakon iskrcaja u Veloj Luci:
                        </span>{' '}
                        Vozite cesta D118 prema Blatu i dalje prema Prižbi (~20
                        min vožnje).
                      </p>
                    </div>
                  ) : isItalian ? (
                    <div className="space-y-3">
                      <p>
                        Da Spalato puoi prendere il traghetto per Vela Luka
                        (lato occidentale di Curzola). Il viaggio dura circa 2 h
                        20 min – 3 h 05 min (a seconda della linea).{' '}
                        <span className="font-semibold">
                          Dopo lo sbarco a Vela Luka:
                        </span>{' '}
                        Guida sulla strada D118 verso Blato e poi verso Prižba
                        (~20 min di guida).
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p>
                        From Split you can catch a ferry to Vela Luka (western
                        side of Korčula). Journey takes about 2 h 20 min – 3 h
                        05 min (depending on the line).{' '}
                        <span className="font-semibold">
                          After disembarking in Vela Luka:
                        </span>{' '}
                        Drive road D118 towards Blato and then to Prižba (~20
                        min drive).
                      </p>
                    </div>
                  )}
                </p>
                <p>
                  <strong className="flex items-center gap-1 md:gap-2">
                    <div className="bg-cyan-100 rounded-lg p-1 md:p-2">
                      <Waves
                        size={16}
                        className="md:w-5 md:h-5 text-cyan-600"
                      />
                    </div>
                    {isCroatian
                      ? 'Katamaranom (brzi trajekt):'
                      : isItalian
                        ? 'In catamarano:'
                        : 'By Catamaran:'}
                  </strong>{' '}
                  {isCroatian ? (
                    <div className="space-y-3">
                      <p>
                        Brze linije (katamarani) povezuju otok Korčulu s većim
                        gradovima poput Splita, Dubrovnika, Hvara i Mljeta.
                        Katamarani obično iskrcavaju u gradu Korčuli ili Veloj
                        Luci. Automobili ne mogu na katamaran pa iz grada
                        Korčule ili Vele Luke do Prižbe možete nastaviti
                        taxi-jem ili minibusom (~20–45 min vožnje).
                      </p>
                    </div>
                  ) : isItalian ? (
                    <div className="space-y-3">
                      <p>
                        Le linee veloci (catamarani) collegano l'isola di
                        Curzola alle principali città come Spalato, Ragusa,
                        Lesina e Meleda. I catamarani generalmente sbarcano
                        nella città di Curzola o a Vela Luka. Dalla città di
                        Curzola o da Vela Luka a Prižba potete continuare in
                        taxi o minibus (~20-45 min di guida).
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p>
                        Fast lines (catamarans) connect the island of Korčula to
                        major cities like Split, Dubrovnik, Hvar, and Mljet.
                        Catamarans typically dock in the city of Korčula or Vela
                        Luka. From the city of Korčula or Vela Luka to Prižba
                        you can continue by taxi or minibus (~20-45 min drive).
                      </p>
                    </div>
                  )}
                </p>
                <div className="mt-4 bg-blue-50 rounded-lg p-3 md:p-4">
                  <p className="mb-2 md:mb-3">
                    <strong>
                      Raspored plovidbe i kupnju karata možete pogledati ovdje:
                    </strong>
                  </p>
                  <a
                    href="https://www.jadrolinija.hr/hr/pretrazite-kupite-kartu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline break-words"
                  >
                    🛳️ Trajekti i Katamarani (Jadrolinija) - raspored i karte
                  </a>
                </div>

                <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 rounded-lg p-3 md:p-4">
                  <p className="text-amber-900 text-xs md:text-sm">
                    <strong>
                      📌{' '}
                      {isCroatian
                        ? 'Savjet:'
                        : isItalian
                          ? 'Consiglio:'
                          : 'Tip:'}
                    </strong>
                  </p>
                  <p className="text-amber-900 text-xs md:text-sm mt-2">
                    {isCroatian
                      ? 'Preporučujemo unaprijed kupiti karte online (posebno u ljetnim mjesecima) te doći u luku najmanje 30–45 minuta prije polaska ako putujete s vozilom. Ako dolazite bez automobila, katamaran je često brža opcija, dok je trajekt iz Orebića najpraktičniji izbor za goste koji dolaze automobilom.'
                      : isItalian
                        ? "Ti consigliamo di acquistare i biglietti online in anticipo (soprattutto nei mesi estivi) e di arrivare al porto almeno 30-45 minuti prima della partenza se viaggi con il veicolo. Se arrivi senza automobile, il catamarano è spesso l'opzione più veloce, mentre il traghetto da Orebić è la scelta più pratica per i ospiti che arrivano in auto."
                        : 'We recommend purchasing tickets online in advance (especially during summer months) and arriving at the port at least 30-45 minutes before departure if traveling with a vehicle. If you arrive without a car, the catamaran is often the faster option, while the ferry from Orebić is the most practical choice for guests arriving by car.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
