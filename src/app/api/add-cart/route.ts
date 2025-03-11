import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { dbConnect } from "../../../../lib/dbConnect";
import Cart from "../../../../models/cart";

export async function POST(req: NextRequest) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Get user-id from headers
    const userId = req.headers.get('x-user-id');
    console.log("hello", userId);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    const body = await req.json();
    const { productId, quantity } = body;

    if (!productId || quantity <= 0) {
      return NextResponse.json({ error: "Invalid product data" }, { status: 400 });
    }

    // Find or create the user's cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    // Check if product already exists in cart
    const productIndex = cart.products.findIndex(
      (p: any) => p.productId.toString() === productId
    );

    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId: new mongoose.Types.ObjectId(productId), quantity });
    }

    await cart.save();

    return NextResponse.json({ message: "Product added to cart", cart });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
