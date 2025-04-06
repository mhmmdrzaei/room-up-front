
// sanity.config.js
import { defineConfig } from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from '@/sanity/schemas/schema'
import { myStructure } from './sanity/struture'

export default defineConfig({
  name: 'default',
  title: 'Room Up Front',
  
  projectId: 'c1ftpuiz', 
  dataset: 'production',
  
  plugins: [  structureTool({structure:myStructure}) , visionTool()],
  
  schema: {
    types: schemaTypes,
  },
  
  basePath: '/studio',
})