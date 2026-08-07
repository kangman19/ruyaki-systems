import { Metadata } from "next";
import { SITE } from "./content";

interface SEOMetadataProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage,
  ogType = "website",
}: SEOMetadataProps): Metadata {
  const canonicalUrl = `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: ogType,
      siteName: SITE.name,
      locale: "en_KE",
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [
            {
              url: `${SITE.url}/opengraph-image.png`,
              width: 1200,
              height: 630,
              alt: SITE.name,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [`${SITE.url}/opengraph-image.png`],
    },
  };
}
