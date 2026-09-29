import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Header from '@site/src/components/header';
import Hero from '@site/src/components/hero';
import About from '@site/src/components/about';
import MySkills from '@site/src/components/my-skills';
import ProjectHighlights from '@site/src/components/project-highlights';
import Contact from '@site/src/components/contact';
import Footer from '@site/src/components/footer';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  // No `title` prop: Docusaurus then uses the site title alone as the tab
  // title, so it doesn't appear twice.
  return (
    <Layout
      description={`${siteConfig.title}. ${translate({
        id: 'hero.tagline',
        message: 'Ich baue Backends und bringe sie sicher in Produktion.',
      })}`}>
      <Header />
      <Hero />
      <About />
      <ProjectHighlights />
      <MySkills />
      <Contact />
      <Footer />
    </Layout>
  );
}
