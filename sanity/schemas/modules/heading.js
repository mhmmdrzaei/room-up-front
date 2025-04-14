export default {
    name: 'heading',
    title: 'Home Page Heading Box',
    type: 'object',
    fields: [
      {
        name: 'headingText',
        title: 'Heading Text',
        type: 'text'
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