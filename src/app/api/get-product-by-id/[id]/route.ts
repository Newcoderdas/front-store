import {  NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../../../lib/dbConnect";
import product from "../../../../../models/product";


export async function GET(req:NextRequest,context:{params:{id:string}}) {
    const { id } = context.params;
    try {
        await dbConnect();
        const productList = await product.findById({ _id: id });
        if (!productList) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
          }
        return NextResponse.json(productList, { status: 200 });
    } catch (error) {
        return NextResponse.json({error:"failed to fetch data"}, { status: 500 });
    }
}