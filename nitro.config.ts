import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  srcDir: 'src',
  noPublicDir: true,
  imports: {
    dts: './.nitro/types/nitro.d.ts',
    dirs: [
      './src/utils/**',
    ],
  },
  runtimeConfig: {
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  },
})
