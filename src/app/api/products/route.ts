import { products } from "@/mocks/pim/products";

export async function GET() {
  return Response.json({ products });
}
