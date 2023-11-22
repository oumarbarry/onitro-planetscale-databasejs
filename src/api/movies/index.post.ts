const insertMovieSchema = z.object({
  title: z.string().max(50),
  description: z.string().max(500).optional(),
})

export default defineEventHandler(async (event) => {
  const { title, description } = await readValidatedBody(event, insertMovieSchema.parse)

  try {
    await db.execute(CREATE_TABLE_QUERY)

    const response = await db.execute(
      "INSERT INTO movies (title, description) VALUES (:title, :description)",
      { title, description },
    )

    setResponseStatus(event, 201, "Created successfully.")

    return response.rows
  }
  catch { throw createError({ statusCode: 500, statusMessage: "Something went wrong." }) }
})
