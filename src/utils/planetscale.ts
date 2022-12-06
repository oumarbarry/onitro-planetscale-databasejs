import { connect } from '@planetscale/database'

const runtimeConfig = useRuntimeConfig()

export const oc = connect({
  host: runtimeConfig.DATABASE_HOST,
  username: runtimeConfig.DATABASE_USERNAME,
  password: runtimeConfig.DATABASE_PASSWORD,
})
