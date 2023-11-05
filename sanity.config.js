/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import schemas from './sanity/schemas/schema'

const config = defineConfig({
  basePath: '/studio',
  projectId: 'xvzs62wg',
  dataset: 'production',
  // Add and edit the content schema in the './sanity/schema' folder
  apiVersion: '2023-11-05',
  title: 'e-commerce',
  schema: { types: schemas },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
  ],
})

export default config
