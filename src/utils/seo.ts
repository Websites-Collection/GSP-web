export const siteConfig = {
  title:
    "Global Solutions Partner | Appointment Generation Systems for Financial Advisors, Retirement Professionals & Service Businesses",
  description:
    "Global Solutions Partner helps financial advisors, retirement specialists, pension review professionals, real estate businesses, and service companies generate qualified appointments through verified prospect data, outreach workflows, qualification, and calendar booking across the US and UK.",
  url: "https://www.globalsolutionspartner.com",
  ogImage: "/background.jpg",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Global Solutions Partner",
  url: siteConfig.url,
  logo: "/logo.svg",
  description: siteConfig.description,
  areaServed: ["US", "GB"],
  serviceType: [
    "Appointment Generation",
    "Lead Intelligence",
    "CRM & Workflow Automation",
  ],
};
