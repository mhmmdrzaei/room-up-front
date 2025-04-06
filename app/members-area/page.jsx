import { getMemberArea,getPassword } from '@/sanity/sanity.utils'
import MembersAreaGate from '../components/MemberAreaGate'
import Layout from '../components/Layout'
import { Metadata } from 'next'

export async function generateMetadata() {
  return {
    title: 'Members Area',
    description: 'Private posts and media for members only',
  }
}

export default async function MembersAreaPage() {
  const posts = await getMemberArea()
  const password = await getPassword()
  console.log(password)

  return (
    <Layout>
            test
            <MembersAreaGate posts={posts} requiredPassword={password.membersAreaPassword} />

    </Layout>

  )
}
