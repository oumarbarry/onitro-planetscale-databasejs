import { useValidatedParams, z } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const { id } = await useValidatedParams(event, { id: z.string() })

  try {
    const movie = await oc.execute('SELECT * FROM movies WHERE id=:id', { id })

    if (movie.rows.length)
      return movie.rows
    else
      return createError({ statusCode: 404, statusMessage: 'MOVIE NOT FOUND' })
  }
  catch {
    return createError({ statusCode: 500, statusMessage: 'SOMETHING WENT WRONG' })
  }
})
