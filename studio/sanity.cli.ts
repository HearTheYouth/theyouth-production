import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'dpv7nblq',
    dataset: 'production',
  },
  project: {
    basePath: '/studio',
  },
  studioHost: 'theyouth-studio',
})
