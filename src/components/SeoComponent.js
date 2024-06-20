import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";

function SEOComponent({
  title,
  description,
  canonicalURL,
  image,
  video,
  keywords,
}) {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: canonicalURL,
    image: image,
    author: {
      "@type": "Person",
      name: "Robotric Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Robotric",
      logo: {
        "@type": "ImageObject",
        url: "https://robotric.org/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalURL,
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalURL} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Eric deQuevedo" />
      <meta name="publisher" content="Eric deQuevedo" />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalURL} />
      {image && <meta property="og:image" content={image} />}
      {video && <meta property="og:video" content={video} />}
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Robotric" />
      <meta name="twitter:site" content="@ricdequantum" />
      <meta name="twitter:creator" content="@ricdequantum" />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://robotric.org/"
      />
    </Head>
  );
}

SEOComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalURL: PropTypes.string.isRequired,
  image: PropTypes.string,
  video: PropTypes.string,
  keywords: PropTypes.string.isRequired,
};

export default SEOComponent;