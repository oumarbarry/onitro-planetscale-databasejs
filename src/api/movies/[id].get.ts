export default defineEventHandler(async (event) => {
  const { id } = await getValidatedRouterParams(event, z.object({ id: z.coerce.number() }).parse)

  const response = await db.execute("SELECT * FROM movies WHERE id=:id", { id })

  if (response.rows.length === 0)
    throw createError({ statusCode: 400, statusMessage: "Movie not found." })

  return response.rows
})
