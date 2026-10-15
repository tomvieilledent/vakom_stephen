import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { AboutConsultant } from '@/components/sections/AboutConsultant';
import { AboutVakomRodez } from '@/components/sections/AboutVakomRodez';

// L'ordre des deux sections peut être inversé ici.
export default function About() {
  useSeo(PAGE_SEO.about);

  return (
    <>
      <AboutConsultant />
      <AboutVakomRodez />
    </>
  );
}
