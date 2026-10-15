import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';

// Lazy-loading des pages secondaires pour alléger le bundle initial.
const About = lazy(() => import('@/pages/About'));
const Testimonials = lazy(() => import('@/pages/Testimonials'));
const Contact = lazy(() => import('@/pages/Contact'));
const LegalNotice = lazy(() => import('@/pages/LegalNotice'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="temoignages" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<LegalNotice />} />
        <Route path="confidentialite" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
