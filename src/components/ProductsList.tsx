import { ReactNode } from "react";

interface ProductsListProps {
  children: ReactNode;
}

function ProductsList({ children }: ProductsListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </div>
  );
}

export default ProductsList;
