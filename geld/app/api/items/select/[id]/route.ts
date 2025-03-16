import { item, query } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  try {
    const i: item = (await query(`SELECT * FROM items WHERE id=${id}`))[0];
    return new NextResponse(JSON.stringify({ data: i }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error!", id: id }),
      {
        status: 500,
      }
    );
  }
}
