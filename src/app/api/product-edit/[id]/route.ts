import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../../../lib/dbConnect';
import product from '../../../../../models/product';




export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  const {id} = context.params;
  try {
      await dbConnect();
      const body = await req.json();
      const result = await product.findByIdAndUpdate(id,
          { title: body.title, description: body.description, discount: body.disount, price: body.price, media: body.media, updatedAt: new Date() },
         {new: true}
      );
    if (!result) {
      return NextResponse.json({ error: 'product not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'product edit successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to edit product' }, { status: 500 });
  }
}