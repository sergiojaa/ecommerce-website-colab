"use client";
import ProductSlider from "@/components/ProductSlider"; // კომპონენტის სწორი იმპორტი
import TopProducts from "@/components/TopProducts";
import useFetchProducts from "@/useFetchProducts"; // ჰუკის იმპორტი

export default function Home() {
  const { productData, loading, error } = useFetchProducts(); // მონაცემების მიღება ჰუკიდან

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ maxWidth: "1170px", margin: "auto", marginTop: "150px" }}>
      {/* <TopProducts /> */}
      <ProductSlider rows={1} products={productData} />
      <ProductSlider rows={2} products={productData} />
    </div>
  );
}
