import { item, query } from "@/db/db";

export async function GET() {
  try {
    const items: item[] = await query("SELECT * FROM items");
    return new Response(JSON.stringify({ data: items }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal Server Error!" }), {
      status: 500,
    });
  }
}
