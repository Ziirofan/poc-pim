import Image from "next/image";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/products/1");
  const { productData } = await response.json();
  console.log(productData);
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
      <Image
        src="https://source.unsplash.com/random/300x300/?1"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        width={200}
        height={300}
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase text-default-600">
          {productData.family} - {productData.identifier}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          Nam maximus purus
        </h2>
      </div>
      <p className="text-gray-800">
        Category:{" "}
        {productData.categories.map((categ, index) => (
          <span key={index}>{categ} </span>
        ))}
      </p>
    </div>
  );
}
