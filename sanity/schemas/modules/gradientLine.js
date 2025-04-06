// modules/gradientLine.js
export default {
    name: 'gradientLine',
    title: 'Gradient Line',
    type: 'object',
    fields: [
      {
        name: 'lineColor',
        title: 'Line Color',
        type: 'string',
        options: {
          list: [
            { title: 'Black', value: 'black' },
            { title: 'Red', value: 'red' }
          ],
          layout: 'dropdown'
        },
        initialValue: 'black'
      },
      {
        name: 'align',
        title: 'Align',
        type: 'string',
        options: {
          list: [
            { title: 'Left', value: 'left' },
            { title: 'Right', value: 'right' }
          ],
          layout: 'dropdown'
        },
        initialValue: 'left'
      }
    ],
    preview: {
      select: {
        color: 'lineColor',
        align: 'align'
      },
      prepare({ color, align }) {
        return {
          title: 'Gradient Line',
          subtitle: `Color: ${color || 'black'} - Align: ${align || 'left'}`
        }
      }
    }
  }
  