import { useValidatedBody, z } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const { title, description } = await useValidatedBody(event, z.object({
    title: z.string().min(1).max(50),
    description: z.string().optional(),
  }))

  try {
    const response = await oc.execute('INSERT INTO movies (title, description) VALUES (:title, :description)', { title, description })

    return { id: response?.insertId, title, description: description ?? null }
  }
  catch {
    return createError({ statusCode: 500, statusMessage: 'SOMETHING WENT WRONG' })
  }
})
