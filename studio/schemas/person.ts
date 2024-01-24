import {defineType, defineField} from 'sanity'

const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'dependant',
      title: 'Dependant',
      type: 'string',
    }),
    defineField({
      name: 'birth',
      title: 'Birth',
      type: 'string',
    }),
    defineField({
      name: 'death',
      title: 'Death',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
    }),
  ],
})

export default person
