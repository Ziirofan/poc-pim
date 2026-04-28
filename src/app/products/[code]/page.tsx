import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  products,
  getProductValue,
  getProductPrice,
} from "@/mocks/pim/products";

export function generateStaticParams() {
  return products.map((p) => ({ code: p.identifier }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const product = products.find((p) => p.identifier === code);

  if (!product) notFound();

  const name = getProductValue(product, "name") ?? product.identifier;
  const description = getProductValue(product, "description");
  const price = getProductPrice(product);
  const priceUsd = getProductPrice(product, "USD");
  const color = getProductValue(product, "color");
  const size = getProductValue(product, "size");
  const imageUrl = getProductValue(product, "image");

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6"
        >
          &larr; Back to catalog
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden md:flex">
          {/* Image */}
          <div className="relative md:w-1/2 h-80 md:h-auto bg-gray-200">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No image
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-8 md:w-1/2">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              {product.family}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">{name}</h1>

            {description && (
              <p className="text-gray-600 mt-4 leading-relaxed">
                {description}
              </p>
            )}

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              {price && (
                <span className="text-2xl font-bold text-gray-900">
                  {price} &euro;
                </span>
              )}
              {priceUsd && (
                <span className="text-lg text-gray-400">/ {priceUsd} $</span>
              )}
            </div>

            {/* Attributes */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {color && (
                <div>
                  <span className="text-gray-400 block">Color</span>
                  <span className="text-gray-900 capitalize font-medium">
                    {color}
                  </span>
                </div>
              )}
              {size && (
                <div>
                  <span className="text-gray-400 block">Size</span>
                  <span className="text-gray-900 font-medium">{size}</span>
                </div>
              )}
              <div>
                <span className="text-gray-400 block">Identifier</span>
                <span className="text-gray-900 font-mono text-xs">
                  {product.identifier}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block">Status</span>
                <span
                  className={`font-medium ${product.enabled ? "text-green-600" : "text-red-500"}`}
                >
                  {product.enabled ? "Enabled" : "Disabled"}
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6">
              <span className="text-gray-400 text-sm block mb-2">
                Categories
              </span>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {cat.replace(/_/g, " ")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
