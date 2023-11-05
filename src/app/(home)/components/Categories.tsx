import prisma from "@/lib/prisma";
import CategoryItem from "./category-item";
import { Category } from "@prisma/client";

interface CategoriesProps {
  categories?: Category[];
};

const  Categories = async () =>{
  try {
    const categories = await prisma.category.findMany();
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-6 items-center">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-2 items-center">
        Sem Categorias cadastradas
      </div>
    );
  };
};

export default Categories;