import { prismaClient } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

// POST /api/categories
// Required fields in body: name, slug, imageUrl

export default async function createCategory(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, slug, imageUrl } = req.body
  const result = await prismaClient.category.create({
    data: {
      name: name,
      slug: slug,
      imageUrl: imageUrl,
    },
  })
  return res.status(201).json(result)
}