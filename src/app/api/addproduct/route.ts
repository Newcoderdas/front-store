import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../../lib/dbConnect";
import product from "../../../../models/product";


export async function POST(req: NextRequest) {
  try {
    await dbConnect(); // Connect to MongoDB

    const body = await req.json(); // Parse request body
    const { title, description, price, discount, media } = body;
    

    if (!title || !description || price === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newProduct = new product({ title, description, price, discount, media });
    await newProduct.save();

    return NextResponse.json({ message: "Product created successfully!", product: newProduct });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
