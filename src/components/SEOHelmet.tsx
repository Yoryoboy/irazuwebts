import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO component for consistent metadata across pages
 * @param {Object} props
 * @param {string} props.title - The page title (will be appended with site name)
 * @param {string} props.description - The meta description for the page
 * @param {string} props.siteName - Optional site name to append to title (defaults to "Irazu Technology")
 */
function SEOHelmet({
  title,
  description,
  siteName = "Irazu Technology",
}: {
  title: string;
  description: string;
  siteName?: string;
}) {
  const fullTitle = title ? `${title} - ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default SEOHelmet;
