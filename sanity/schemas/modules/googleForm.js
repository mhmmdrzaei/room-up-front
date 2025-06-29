export default {
  name: 'googleForm',
  title: 'Google Form Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Google Form URL',
      type: 'url',
      description: 'Paste the full Google Form URL (the "viewform" link).',
      validation: Rule =>
        Rule.required()
          .uri({ scheme: ['http', 'https'] })
          .custom(value =>
            value && value.includes('docs.google.com/forms')
              ? true
              : 'Must be a Google Forms URL'
          )
    },
    {
      name: 'height',
      title: 'Embed Height',
      type: 'string',
      description: 'CSS height for the iframe, e.g. "800px" or "100vh"',
      initialValue: '800px'
    }
  ]
}