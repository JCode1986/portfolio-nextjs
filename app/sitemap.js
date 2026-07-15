import { projects, site } from '@/lib/content';

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: site.siteUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${site.siteUrl}/work/${project.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: project.slug === 'wherekeep' ? 0.9 : 0.7,
    })),
  ];
}
