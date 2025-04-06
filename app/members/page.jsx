import { getMembers, getStaff, getMentors, getsettings } from '@/sanity/sanity.utils';
import MembersTabs from '../components/MembersTab';
import Layout from '../components/Layout';

export async function generateMetadata(
  { params }
) {
  const { slug } = params;
  const settings = await getsettings();
  const pageTitle = 'Members Directory'
  const description =  settings?.siteDescription || '';

  return {
    title: `${settings?.siteTitle || ''} | Members Directory`,

    description,
    openGraph: {
      title: settings?.siteTitle || '',
      description,
      url: '',
      siteName: settings?.siteTitle || '',
      images: [
        {
          url: '',
          width: 1200,
          height: 628,
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
  };
}
  

export default async function MembersPage() {
  const mentors = await getMentors();
  const staff = await getStaff();
  const members = await getMembers();

  return (
    <Layout>
      <h1>Meet Our Team</h1>
      <MembersTabs members={members} mentors={mentors} staff={staff} />
    </Layout>
  );
}
