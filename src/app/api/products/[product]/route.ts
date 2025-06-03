export const dynamic = "force-static";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ product: string }> },
) {
  const { product } = await params;
  console.log(product);
  const response = await fetch(
    `http://localhost:3001/api/rest/v1/published-products/${product}`,
  );
  const productData = await response.json();
  return Response.json({ productData });
}
