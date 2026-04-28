import Image from "next/image";
import Link from "next/link";
import {
  products,
  getProductValue,
  getProductPrice,
} from "@/mocks/pim/products";

export default function Home() {
  // Sort products by price (ascending)
  const sortedProducts = [...products].sort((a, b) => {
    const priceA = getProductPrice(a) ?? "";
    const priceB = getProductPrice(b) ?? "";
    return priceA < priceB ? -1 : priceA > priceB ? 1 : 0;
  });

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Product Catalog
        </h1>
        <p className="text-gray-500 mb-8">
          POC — Mock PIM data rendered with Next.js
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => {
            const name = getProductValue(product, "name") ?? product.identifier;
            const price = getProductPrice(product);
            const color = getProductValue(product, "color");
            const imageUrl = getProductValue(product, "image");

            return (
              <Link
                key={product.identifier}
                href={`/products/${product.identifier}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative h-64 bg-gray-200">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No image
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    {product.family}
                  </span>
                  <h2 className="text-lg font-semibold text-gray-900 mt-1">
                    {name}
                  </h2>
                  <div className="flex items-center justify-between mt-2">
                    {price && (
                      <span className="text-lg font-bold text-gray-900">
                        {price} &euro;
                      </span>
                    )}
                    {color && (
                      <span className="text-sm text-gray-500 capitalize">
                        {color}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {product.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                      >
                        {cat.replace(/_/g, " ")}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
