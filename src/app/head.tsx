export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aprizal Abyan",
    url: "https://aprizalabyan.github.io",
    jobTitle: "Web Developer",
    sameAs: [
      "https://github.com/aprizalabyan",
      "https://www.linkedin.com/in/muhammad-aprizal-abyan-598012268/"
    ]
  };

  return (
    <>
      <title>Aprizal Abyan - Portfolio</title>
      <meta name="description" content="Portfolio Aprizal Abyan, Web Developer" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}