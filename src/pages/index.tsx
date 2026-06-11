import Head from "next/head";
import Navbar from "@/components/Navigation/Navbar";
import Hero from "@/components/Hero/Hero";
import Problem from "@/components/Problem/Problem";
import Solution from "@/components/Solution/Solution";
import Offers from "@/components/Offers/Offers";
import Industries from "@/components/Industries/Industries";
import Metrics from "@/components/Metrics/Metrics";
import Reporting from "@/components/Reporting/Reporting";
import WhyUs from "@/components/WhyUs/WhyUs";
import FAQ from "@/components/FAQ/FAQ";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import { siteConfig } from "@/utils/seo";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.url} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content={siteConfig.ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.ogImage} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Offers />
        <Industries />
        <Metrics />
        <Reporting />
        <WhyUs />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
