import { type SchemaTypeDefinition } from 'sanity'

export const schemaTypes: SchemaTypeDefinition[] = [
  {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'text',
      },
    ],
    preview: {
      select: { title: 'title' },
      prepare({ title }) {
        return {
          title,
        }
      },
    },
  },
]
