
// Import document schemas
import member from './member'
import mentorStaff from './mentorStaff'
import page from './page'
import siteSettings from './settings'
import memberAreaPosts from './memberAreaPosts'

// Import object schemas
import heading from './modules/heading'
import headingText from './modules/headingText'
import bodyText from './modules/bodyText'
import logoContainer from './modules/logoContainer'
import ctaButton from './modules/ctaButton'
import membersCarousel from './modules/membersCarousel'
import gradientLine from './modules/gradientLine'
import textImageBox from './modules/textImageBox'
import seo from './seo'
import headingImage from './modules/headingImage'
import textImageDynamic from './modules/textImageDynamic'
import googleForm from './modules/googleForm'




export const schemaTypes = [

      // Document types
      member,
      mentorStaff,
      page,
      siteSettings,
      
      // Object types
      heading,
      headingText,
      bodyText,
      logoContainer,
      ctaButton,
      membersCarousel,
      textImageDynamic,
      gradientLine,
      googleForm,
      textImageBox,
      seo,
      memberAreaPosts,
      headingImage
]