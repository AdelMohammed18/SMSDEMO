import { Layout } from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-narrow">
          <h1 className="mb-8">Privatlivspolitik</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introduktion</h2>
                <p className="leading-relaxed">
                  Hos Sorø Micro Soft tager vi din privatlivsbeskyttelse alvorligt. Denne privatlivspolitik 
                  forklarer, hvordan vi indsamler, bruger og beskytter dine personoplysninger.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Dataansvarlig</h2>
                <p className="leading-relaxed">
                  Sorø Micro Soft er dataansvarlig for behandlingen af de personoplysninger, 
                  som vi modtager om dig. Du kan kontakte os på:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Email: post@sms-online.dk</li>
                  <li>Telefon: 57 83 00 82</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Hvilke oplysninger indsamler vi?</h2>
                <p className="leading-relaxed">
                  Vi indsamler kun de oplysninger, der er nødvendige for at levere vores ydelser til dig:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>Kontaktoplysninger (navn, email, telefonnummer)</li>
                  <li>Virksomhedsoplysninger</li>
                  <li>Tekniske oplysninger relateret til IT-support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Hvordan bruger vi dine oplysninger?</h2>
                <p className="leading-relaxed">
                  Vi bruger dine oplysninger til at:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>Levere IT-support og services</li>
                  <li>Kontakte dig vedrørende dine henvendelser</li>
                  <li>Forbedre vores ydelser</li>
                  <li>Overholde lovmæssige forpligtelser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Dine rettigheder</h2>
                <p className="leading-relaxed">
                  Du har ret til at få indsigt i, rette eller slette dine personoplysninger. 
                  Kontakt os, hvis du ønsker at udøve dine rettigheder.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
                <p className="leading-relaxed">
                  Har du spørgsmål til vores behandling af dine personoplysninger, er du velkommen til at kontakte os.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
