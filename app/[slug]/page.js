import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { pageBySlugQuery } from '@/sanity/sanity.utils';
import BodyText from '../components/BodyText';
import CTAButton from '../components/CtaButton';
import GradientLine from '../components/GradientLine';
import Heading from '../components/Heading';
import LogoContainer from '../components/LogoContainer';
import MembersCarousel from '../components/MembersCarousel';
import TextImageBox from '../components/TextImageBox';
import HeadingText from '../components/HeadingText';
import Layout from '../components/Layout';

const componentMap = {
  heading: Heading,
  headingText: HeadingText,
  bodyText: BodyText,
  logoContainer: LogoContainer,
  ctaButton: CTAButton,
  membersCarousel: MembersCarousel,
  gradientLine: GradientLine,
  textImageBox: TextImageBox,
};


export async function generateMetadata(
  { params }
) {
  const { slug } = params;
  const settings = await getsettings();
  const page = await pageBySlugQuery(slug);
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
  
  

// This function handles fetching page content based on slug
export default async function Page({ params }) {
  const { slug } = params;
  const pageData = await pageBySlugQuery(slug);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { title, pageBlocks } = pageData;

  return (
    <Layout>
    <div className="page-container">

      {/* Page Title */}
      <h1>{title}</h1>

      {pageBlocks?.map((block) => {
          const BlockComponent = componentMap[block._type];
          if (!BlockComponent) {
            console.warn(`No component for block type: ${block._type}`);
            return null;
          }
          return <BlockComponent key={block._key} {...block} />;
        })}


    </div>
    </Layout>
  );
}
