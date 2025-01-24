import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const categoryId = (await params).id;
  const response = await fetch(
    `https://geguchadzeadmin.pythonanywhere.com/products/categories/${categoryId}`
  );
  const category = await response.json();

  return <div>{category.name}</div>;
}
