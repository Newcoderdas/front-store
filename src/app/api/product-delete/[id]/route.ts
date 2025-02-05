import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../../../lib/dbConnect';
import product from '../../../../../models/product';




export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const {id} = context.params;
  try {
    await dbConnect();
    const result = await product.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json({ error: 'product not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'product deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}