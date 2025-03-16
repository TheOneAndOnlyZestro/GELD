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
  const results =
    await query(`INSERT INTO items (name, category, price, store, date)
    VALUES ( '${obj.name}', '${obj.category}', ${obj.price}, '${obj.store}', '${obj.date}')`);
  return results;
}
async function update(obj: item) {
  try {
    const results = await query(`UPDATE items SET 
     name='${obj.name}', category='${obj.category}', price=${obj.price}, store='${obj.store}', date='${obj.date}'
     WHERE id=${obj.id};`);
    return results;
  } catch (err) {
    console.log("SQL ERROR!!");
    return `SQL ERROR OCCURRED: ${err}`;
  }
}

async function deleteItem(id: number) {
  const results = await query(`DELETE FROM items WHERE id=${id}`);
  return results;
}
export async function POST(request: Request) {
  try {
    const res = await request.json();
    const body: item = res.data;
    const result = await insert(body);

    return new NextResponse(JSON.stringify({ returned: res }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ msg: "Error Ocurred at endpoint", error: err }),
      { status: 500 }
    );
  }
}
export async function PUT(request: Request) {
  try {
    const res = await request.json();
    const body: item = res.data;
    if (!body.id) {
      return new NextResponse(
        JSON.stringify({ msg: "ERROR: ID FIELD IS MISSING!!!" }),
        { status: 400 }
      );
    }
    const result = await update(body);
    return new NextResponse(JSON.stringify({ returned: res }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        msg: "Error Ocurred at endpoint in update",
        error: err,
      }),
      { status: 500 }
    );
  }
}
export async function DELETE(request: Request) {
  try {
    const res = await request.json();
    const body: number = res.id;

    const result = await deleteItem(body);

    return new NextResponse(
      JSON.stringify({ msg: `Item with ID:${body} was removed from database` }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ msg: "Error Ocurred at endpoint", error: err }),
      { status: 500 }
    );
  }
}
