export default defineEventHandler(async () => {
  try {
    const response = await db.execute("SELECT * FROM movies")

    return response.rows
  }
  catch { throw createError({ statusCode: 500, statusMessage: "Something went wrong." }) }
})
