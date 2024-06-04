import {defineConfig} from 'sanity'
import {schemaTypes} from './schemaTypes'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'portfolio admin',

  projectId: 'y5yzf64p',
  dataset: 'production',
  basePath: '/studio',
  apiVersion: '2024-06-04',

  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
