import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { pageBySlugQuery, getsettings } from '@/sanity/sanity.utils';
import Page from './[slug]/page';



export async function generateMetadata() {
  const settings = await getsettings();
  const page = await pageBySlugQuery('home');
  const description = page?.seo?.seoDescription || settings?.siteDescription || '';

  return {
    title: `${settings?.siteTitle || ''} | ${page?.title || ''}`,
    description,
    openGraph: {
      title: settings?.siteTitle || '',
      description,
      url: page?.seo?.seoImage?.asset?.url || '',
      siteName: settings?.siteTitle || '',
      images: [
        {
          url: page?.seo?.seoImage?.asset?.url || '',
          width: 1200,
          height: 628,
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
  };
}

  

export default async function Home() {
  const homeSlug = 'home'; // Or whatever your homepage slug is
  const pageData = await pageBySlugQuery(homeSlug);

  if (!pageData) {
    return <div>Home page not found</div>;
  }

  return <Page params={{ slug: homeSlug }} />;
}
