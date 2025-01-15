import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
// import ProductSlider from "@/components/ProductSlider";
import ProductSlider from "../components/ProductSlider"; // Update the import path
import Test from "@/components/Test";
import TopProducts from "@/components/TopProducts";

export default function Home() {
  return (
    <div style={{ maxWidth: "1170px", margin: "auto", marginTop: "150px" }}>
      <TopProducts />
      <ProductSlider rows={1} />
      <ProductSlider rows={2} />
    </div>
  );
}
