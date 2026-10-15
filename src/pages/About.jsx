import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { AboutConsultant, AboutValues } from '@/components/sections/AboutConsultant';
import { CONSULTANTS } from '@/config/content';
import { AboutVakomRodez } from '@/components/sections/AboutVakomRodez';

// L'ordre des deux sections peut être inversé ici.
export default function About() {
  useSeo(PAGE_SEO.about);

  return (
    <>
      {CONSULTANTS.map((consultant, i) => (
        <AboutConsultant key={consultant.firstName} consultant={consultant} reverse={i % 2 === 1} />
      ))}
      <AboutValues />
      <AboutVakomRodez />
    </>
  );
}
