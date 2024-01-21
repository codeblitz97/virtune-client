'use client';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import { ThemeProvider } from 'next-themes';

import { benefitOne, benefitTwo } from '../components/data';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Faq from '../components/faq';
import React from 'react';

const Home = (): JSX.Element => {
  return (
    <ThemeProvider attribute="class">
      <>
        <Navbar />
        <Hero />
        <section id="benefits">
          <SectionTitle
            pretitle="Virtune Benefits"
            title=" Why should you use this bot"
          >
            Virtune is a free music bot, it offers tons of features, including
            some of the premium features too.{' '}
          </SectionTitle>
        </section>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          This is our some of the most frequently asked question.
        </SectionTitle>
        <Faq />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Home;
