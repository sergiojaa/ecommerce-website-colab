import React from "react";
import ProductCard from "@/components/ProductCard";
export interface Product {
  id: number;
  title: string;
  name: string;

  price: number;
  description: string;
  image: string;
}
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
    `https://geguchadzeadmin.pythonanywhere.com/products/categories/${category.name}/products/`
  );
  const products = await productsResponse.json();

  return (
    <div style={{ maxWidth: "1170px", margin: "auto" }}>
      <h1 className="mt-[40px] font-bold text-xl">{category.name}</h1>
      <div className="grid grid-cols-12 gap-[45px] mt-[40px] mb-[140px] ">
        {products.map((product: Product) => (
          <div className="col-span-3" key={product.id}>
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
