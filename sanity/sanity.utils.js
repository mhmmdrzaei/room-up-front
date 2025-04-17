import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

// Site Settings Query
export async function getsettings() {
  return createClient(clientConfig).fetch( groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    headingMenu[] {
      menuItemName,
      menuItemUrl
    },
    membersAreaPassword,
    headingLogo {
      asset->{
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    "footerLogo": 
    footerLogo {
      asset->{url}
    },
    socialLinks[] {
      socialLink,
      icon
    },
    footerMenu[] {
      menuItemName,
      menuItemUrl
    },
    email {
      emailLabel,
      emailUrl
    }
  }
`,
  )
}

// Page Query by Slug
export async function pageBySlugQuery(slug) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "page" && slug.current == $slug][0] {
      title,
      slug,
      pageBlocks[] {
        _key,
        _type,
        ...select(
          _type == "heading" => {
            headingText,
            memberReference-> {
              name,
              location,
              images[0] {
                asset-> {
                  url,
                  metadata { dimensions }
                },
                alt,
                caption
              }
            }
          },
          _type == "headingText" => {
            headingLevel,
            width,
            textAlign,
            text
          },
          _type == "bodyText" => {
            width,
            content,
            background
          },
          _type == "logoContainer" => {
            logos[] {
              image {
                asset-> {
                  url,
                  metadata { dimensions }
                },
                alt
              },
              url
            }
          },
          _type == "ctaButton" => {
            buttonLabel,
            buttonUrl,
            openInNewWindow,
            buttonColor,
            buttonAlignment
          },
          _type == "membersCarousel" => {},
          _type == "gradientLine" => {
            lineColor,
            align
          },
          _type == "textImageBox" => {
            image {
              asset-> {
                url,
                metadata { dimensions }
              },
              alt,
              caption
            },
            textContent,
            alignment
          }
        )
      },
      seo {
        seoTitle,
        seoDescription,
        seoImage {
          asset-> {
            url
          }
        }
      }
    }
  `, { slug });
}


export async function getMembers(){
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "member"] {
      name,
      slug,
       images[] {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt,
        caption
      },
      email,
      location,
      website,
       bio[] {
        ...
      }
    }`
  )
}


// Random Members Query for Members Carousel (fetch 20 members, select 3 randomly)
export async function getRandomMembers() {
  const members = await createClient(clientConfig).fetch(
    groq`
      *[_type == "member"] {
        name,
        slug,
        location,
        website,
        email,
        images[0] {
          asset->{
            url,
          },
          alt
        }
      }
    `
  );

  // Randomly select 3 members from the fetched list
  const randomMembers = getRandomItems(members, 3);
  return randomMembers;
}

// Helper function to randomly select N items from an array
function getRandomItems(arr, num) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, num);
}



export async function getRandomMember() {
  return createClient(clientConfig).fetch(
    groq`
*[_type == "member"] | order((_createdAt)) [0...1] {
      name,
      slug,
      location,
      website,
 "image": images[0]{asset->{url}, alt, caption}
    }
    `
  )
}


// Mentor and Staff Query
export async function getMentors() {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "mentorStaff" && "mentor" in role] {
      name,
      slug {
        current
      },
      image {
        asset -> {
          url
        },
        alt
      },
      position,
      email,
      website,
      bio
    }
  `
  )
}
export async function getStaff() {
  return createClient(clientConfig).fetch(
    groq`
     *[_type == "mentorStaff" && "staff" in role] {
      name,
      slug {
        current
      },
      image {
        asset -> {
          url
        },
        alt
      },
      position,
      email,
      website,
      bio
    }
  `
  )
}

export async function getMemberArea() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "membersAreaPosts"]{
  _id,
  title,
  content[]{
    ...,
    asset->{url}, // for images
    _type == "video" => {
      _type,
      url
    }
  }
}
`
  )

  
}

export async function getPassword() {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "siteSettings"][0]{ membersAreaPassword }
    `
  )
}