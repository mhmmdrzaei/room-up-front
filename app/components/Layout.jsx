import Header from './Header';
import Footer from './Footer';
import { getsettings } from '@/sanity/sanity.utils';
import { AuthProvider } from './AuthContext';

export default async function Layout({ children }) {
  const settings = await getsettings()
  return (
    <>
    <AuthProvider>
      <Header settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
    </AuthProvider>
    </>
  );
}
