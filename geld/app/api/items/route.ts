import { item, query } from "@/db/db";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(JSON.stringify({}), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  });
}
export async function GET() {
  try {
    const items: item[] = await query("SELECT * FROM items");
    return new NextResponse(JSON.stringify({ data: items }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal Server Error!" }), {
      status: 500,
    });
  }
}
async function insert(obj: item) {
  await query(`INSERT INTO items (name, category, price, store, date)
    VALUES ( '${obj.name}', '${obj.category}', ${obj.price}, '${obj.store}', '${obj.date}')`);
}
export async function POST(request: Request) {
  const res = await request.json();
  const body: item = res.data;
  await insert(body);

  return new NextResponse(JSON.stringify({ returned: res }), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
