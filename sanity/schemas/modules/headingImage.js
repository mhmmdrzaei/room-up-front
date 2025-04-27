export default {
    name: 'headingImage',
    title: 'Heading Image Box',
    type: 'object',
    fields: [
      {
        name: 'imageHeading',
        type: 'image',
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string'
          },
          {
            name: 'caption',
            title: 'Caption',
            type: 'string'
          }
        ]
      },
      {
        name: 'headingText',
        title: 'Heading Text',
        type: 'text'
      },
     
    ],
    preview: {
      select: {
        media: 'imageHeading',
        alignment: 'alignment'
      },
      prepare({ media, alignment }) {
        return {
          title: 'Heading Image Box',
          media: media
        }
      }
    }
  }