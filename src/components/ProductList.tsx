import { useEffect, useState } from "react";

export const ProductList = ({ category }: { category: string }) => {
  const [producsts, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};
