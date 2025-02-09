import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || '2WaK4NNRiZJSewWbG8FbE9ILZQBsRMiY8uqvabi5x/8='; // Use a secure secret key in production

export async function middleware(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized access' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, SECRET_KEY);

    // Attach the user data to the request (optional, if needed)
    req.headers.set('user', JSON.stringify(decoded));

    return NextResponse.next(); // Proceed to the protected route
  } catch (error) {
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
  }
}

// Apply middleware to specific routes
export const config = {
  matcher: ['/:path*'], // Replace with your desired routes
};
