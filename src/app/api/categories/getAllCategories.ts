import { prismaClient } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getAllCategories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const categories = await prismaClient.category.findMany();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    return res.status(405).json({ error: 'Método não permitido' });
  }
}
