export default function sitemap() {
  return [
    {
      url: 'https://www.digitrizon.com/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.digitrizon.com/company/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ];
}