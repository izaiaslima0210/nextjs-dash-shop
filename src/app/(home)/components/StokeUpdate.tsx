import prisma from "@/lib/prisma";

interface StokeProps {
    slug: string, 
    quantidade: number, 
    acao: string, 
    description?: string,
    insertedBy: string
}

async function updateStoke({slug, quantidade, acao, description, insertedBy}:StokeProps) {
  try {
    const product = await prisma.product.findFirst({
      where: { slug: slug },
    });

    if (!product) {
      console.error('Produto não encontrado');
      return;
    }

    if (acao === 'Include') {
      product.stockQuantity += quantidade;
    } else if (acao === 'Exclude') {
      if (product.stockQuantity >= quantidade) {
        product.stockQuantity -= quantidade;
      } else {
        console.error('Estoque insuficiente para remover a quantidade desejada');
        return;
      }
    } else {
      console.error('Ação inválida. Deve ser "Include" ou "Exclude"');
      return;
    }

    await prisma.product.update({
      where: { id: productId },
      data: {
        stockQuantity: product.stockQuantity,
      },
    });

    await prisma.productStoke.create({
      data: {
        productId,
        action: acao,
        description,
        insertedBy,
      },
    });

    console.log('Estoque atualizado com sucesso!');

  } catch (error) {
    console.error('Erro ao atualizar o estoque:', error);
  } finally {
    await prisma.$disconnect();
  }
}
