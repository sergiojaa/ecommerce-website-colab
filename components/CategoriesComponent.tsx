import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

interface ApiCategory {
  id: number;
  name: string;
}

const CategoriesComponent: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://geguchadzeadmin.pythonanywhere.com/products/categories/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data: ApiCategory[] = await response.json(); // Define the expected type here
        // Map only the required fields
        const mappedCategories = data.map((category) => ({
          id: category.id,
          name: category.name,
        }));
        setCategories(mappedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <ul className="flex flex-row md:flex-col justify-between h-full gap-x-[16px] md:gap-x-0">
      {categories.map((category) => (
        <li className="font-normal text-base" key={category.id}>
          <Link className="whitespace-nowrap" href={`/category/${category.id}`}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesComponent;
