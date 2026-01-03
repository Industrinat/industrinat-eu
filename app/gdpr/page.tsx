import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integritetspolicy - Industrinät',
  description: 'Information om hur Industrinät Nordiska Nätlösningar AB behandlar dina personuppgifter enligt GDPR.',
};

export default function GDPRPage() {
  return (
    <main>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Integritetspolicy</h1>
          <p className="text-xl text-gray-300">
            Så hanterar vi dina personuppgifter
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <p className="text-gray-600 mb-8">
            Senast uppdaterad: December 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Personuppgiftsansvarig</h2>
          <p className="text-gray-600 mb-4">
            Industrinät Nordiska Nätlösningar AB (org.nr 559350-0992) är personuppgiftsansvarig för behandlingen av dina personuppgifter.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Kontaktuppgifter:</strong><br />
            Stenmursvägen 56, 428 34 Kållered<br />
            E-post: info@industrinat.se<br />
            Telefon: 031-788 45 12
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Vilka personuppgifter samlar vi in?</h2>
          <p className="text-gray-600 mb-4">Vi samlar in följande personuppgifter:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Namn och kontaktuppgifter (e-post, telefonnummer)</li>
            <li>Företagsnamn och organisationsnummer</li>
            <li>Projektinformation och specifikationer vid offertförfrågningar</li>
            <li>Kommunikationshistorik</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Varför behandlar vi dina uppgifter?</h2>
          <p className="text-gray-600 mb-4">Vi behandlar dina personuppgifter för att:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Besvara förfrågningar och lämna offerter</li>
            <li>Fullgöra avtal om leverans av produkter och tjänster</li>
            <li>Skicka relevant information om våra produkter (om du samtyckt)</li>
            <li>Uppfylla rättsliga skyldigheter (bokföring m.m.)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Rättslig grund</h2>
          <p className="text-gray-600 mb-4">Vår behandling av personuppgifter baseras på:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li><strong>Samtycke</strong> – för marknadsföring och nyhetsbrev</li>
            <li><strong>Avtal</strong> – för att kunna leverera beställda produkter och tjänster</li>
            <li><strong>Berättigat intresse</strong> – för att besvara förfrågningar och offerter</li>
            <li><strong>Rättslig förpliktelse</strong> – för bokföring och skatteändamål</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Hur länge sparar vi uppgifterna?</h2>
          <p className="text-gray-600 mb-4">
            Vi sparar dina personuppgifter så länge det är nödvändigt för de ändamål de samlades in för:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Offertförfrågningar: 2 år efter senaste kontakt</li>
            <li>Kunduppgifter: Under avtalsperioden + 7 år (bokföringskrav)</li>
            <li>Marknadsföring: Tills du återkallar ditt samtycke</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Delning av uppgifter</h2>
          <p className="text-gray-600 mb-4">
            Vi delar inte dina personuppgifter med tredje part förutom:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Leverantörer som hjälper oss leverera tjänster (t.ex. e-posttjänster)</li>
            <li>Myndigheter när det krävs enligt lag</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Vi säljer aldrig dina personuppgifter till tredje part.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Dina rättigheter</h2>
          <p className="text-gray-600 mb-4">Du har rätt att:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li><strong>Få tillgång</strong> till dina personuppgifter</li>
            <li><strong>Rätta</strong> felaktiga uppgifter</li>
            <li><strong>Radera</strong> dina uppgifter ("rätten att bli glömd")</li>
            <li><strong>Begränsa</strong> behandlingen</li>
            <li><strong>Invända</strong> mot behandling baserad på berättigat intresse</li>
            <li><strong>Flytta</strong> dina uppgifter (dataportabilitet)</li>
            <li><strong>Återkalla samtycke</strong> när som helst</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Kontakta oss på info@industrinat.se för att utöva dina rättigheter.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Cookies</h2>
          <p className="text-gray-600 mb-4">
            Vår webbplats använder cookies för att förbättra din upplevelse. Vi använder:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li><strong>Nödvändiga cookies</strong> – för att webbplatsen ska fungera</li>
            <li><strong>Analyscookies</strong> – för att förstå hur besökare använder webbplatsen (endast med samtycke)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Säkerhet</h2>
          <p className="text-gray-600 mb-4">
            Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller förstöring.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Klagomål</h2>
          <p className="text-gray-600 mb-4">
            Om du anser att vi behandlar dina personuppgifter felaktigt har du rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Integritetsskyddsmyndigheten</strong><br />
            Box 8114, 104 20 Stockholm<br />
            imy.se
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Ändringar</h2>
          <p className="text-gray-600 mb-4">
            Vi kan komma att uppdatera denna integritetspolicy. Den senaste versionen finns alltid tillgänglig på denna sida.
          </p>
        </div>
      </section>
    </main>
  );
}