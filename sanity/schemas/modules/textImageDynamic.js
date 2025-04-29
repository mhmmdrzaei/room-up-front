export default {
    name: 'textImageDyamic',
    title: 'Text Image Box Dynamic',
    type: 'object',
    fields: [
      {
        name: 'textContent',
        title: 'Text Content',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'ctaButton' }
        ]
      },
      {
        name: 'alignment',
        title: 'Alignment',
        type: 'string',
        options: {
          list: [
            { title: 'Text Image', value: 'textImage' },
            { title: 'Image Text', value: 'imageText' }
          ],
          layout: 'dropdown'
        },
        initialValue: 'textImage'
      },
      {
        name: 'memberReferenceField',
        title: 'Member Reference',
        type:'string',
        readOnly: true,
        description: 'This will automatically pull a member on random'
      },
     
    ],
  }