import { NextResponse } from "next/server";
import { dbConnect } from "../../../../lib/dbConnect";
import product from "../../../../models/product";

export async function GET() {
    try {
        await dbConnect();
        const productList = await product.find();
        return NextResponse.json(productList, { status: 200 });
    } catch (error) {
        return NextResponse.json({error:"failed to fetch data"}, { status: 500 });
    }
}