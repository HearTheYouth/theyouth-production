import { defineField, defineType } from 'sanity'

export const talent = defineType({
  name: 'talent',
  title: 'Talent',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naam',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Woord', value: 'Woord' },
          { title: 'Muziek', value: 'Muziek' },
          { title: 'Beeld', value: 'Beeld' },
        ],
      },
    }),
  ],
})
