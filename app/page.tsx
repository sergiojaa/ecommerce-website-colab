import ProductCard from "@/components/ProductCard";
import Image from "next/image";
// import ProductSlider from "@/components/ProductSlider";
import ProductSlider from "../components/ProductSlider"; // Update the import path

export default function Home() {
  return (
    <div style={{ maxWidth: "1170px", margin: "auto" }}>
      <ProductSlider />
    </div>
  );
}
