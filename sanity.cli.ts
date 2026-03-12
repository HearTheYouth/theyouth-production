import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'dpv7nblq',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
})
