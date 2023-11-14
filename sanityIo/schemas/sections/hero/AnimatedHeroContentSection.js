export default {
  name: 'HeroAnimatedContentSection',
  title: 'Hero Image + Animated Content Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'reference',
      to:[{type: 'MuiTheme'}]
    },

    {
      name: 'contentSlides',
      title: 'Content Slides',
      type: 'array',
      of:[{type: 'HeroSlideContent'}]
    },
    // {
    //   name: 'heroImage',
    //   title: 'Hero Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    // {
    //   name: 'heroImageAltText',
    //   title: 'Hero Image Alt Text',
    //   type: 'string'
    // },
    // {
    //   name: 'heroImageBackground',
    //   title: 'Hero Image Background',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    // {
    //   name: 'contentWelcomeMessage',
    //   title: 'Content Welcome Message',
    //   type: 'string',
    // },
    // {
    //   name: 'contentTitle',
    //   title: 'Content Title',
    //   type: 'string',
    // },
    // {
    //   name: 'contentText',
    //   title: 'Content Text',
    //   type: 'text',
    // },
    // {
    //   name: 'ctaButtonTitle',
    //   title: 'CTA Button Title',
    //   type: 'string'
    // },
    // {
    //   name: 'ctaButtonLink',
    //   title: 'CTA Button Link',
    //   type: 'string'
    // }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'heroImage',
    },
  },
}


