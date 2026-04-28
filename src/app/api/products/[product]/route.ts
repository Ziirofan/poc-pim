import { products } from "@/mocks/pim/products";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ product: string }> },
) {
  const { product } = await params;
  const productData = products.find((p) => p.identifier === product);

  if (!productData) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  return Response.json({ productData });
}
