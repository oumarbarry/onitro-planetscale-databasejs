import { connect } from "@planetscale/database"

const runtimeConfig = useRuntimeConfig()

export const db = connect({
  host: runtimeConfig.DATABASE_HOST,
  username: runtimeConfig.DATABASE_USERNAME,
  password: runtimeConfig.DATABASE_PASSWORD,
})

export const CREATE_TABLE_QUERY = "CREATE TABLE movies IF NOT EXISTS "
  + "(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, "
  + "title varchar(50) NOT NULL, "
  + "description varchar(500))"
