import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const categoryId = (await params).id;

  // Fetch category data
  const categoryResponse = await fetch(
    `https://geguchadzeadmin.pythonanywhere.com/products/categories/${categoryId}`
  );
  const category = await categoryResponse.json();

  // Fetch products for the category
  const productsResponse = await fetch(
    `https://geguchadzeadmin.pythonanywhere.com/products/categories/Electronics/products/`
  );
  const products = await productsResponse.json();

  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {products.map((product: { name: string; id: string }) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
