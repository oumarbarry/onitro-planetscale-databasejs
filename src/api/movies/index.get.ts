export default defineEventHandler(async () => {
  try {
    const movies = await oc.execute('SELECT * FROM movies')
    return movies.rows
  }
  catch {
    return createError({ statusCode: 500, statusMessage: 'SOMETHING WENT WRONG' })
  }
})
