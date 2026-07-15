import { notFound } from 'next/navigation';
import CaseStudyPage from '@/components/CaseStudyPage';
import { getProject, projects, site } from '@/lib/content';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  const title = `${project.title} | Joseph Hangarter`;
  const description = project.description;
  const url = `${site.siteUrl}/work/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Joseph Hangarter Portfolio',
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 760,
          alt: project.imageAlt,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.heroImage],
    },
  };
}

export default async function WorkDetail({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
