import { prismaClient } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: 'O ID da categoria é obrigatório' });
    }

    try {
      const category = await prismaClient.category.findUnique({
        where: {
          id: String(id),
        },
      });

      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    return res.status(405).json({ error: 'Método não permitido' });
  }
}
