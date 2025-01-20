import React, { useEffect, useState } from "react";

interface Category {
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
        const data = await response.json();
        // Map only the required fields
        const mappedCategories = data.map((category: any) => ({
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
    <ul className="flex flex-col justify-between h-full">
      {categories.map((category) => (
        <li className="font-normal text-base" key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesComponent;
