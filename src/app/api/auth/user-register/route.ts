// import type { NextApiRequest, NextApiResponse } from 'next';
// import { dbConnect } from '../../../../../lib/dbConnect';
// import User from '../../../../../models/users';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { first_name, last_name, email, password } = req.body;

//   if (!first_name || !last_name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   try {
//     // Connect to the database
//     await dbConnect();

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//     // Create a new user
//     const newUser = new User({
//       first_name,
//       last_name,
//       email,
//       password,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (error: any) {
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// }
import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "../../../../../lib/dbConnect";
import User from "../../../../../models/users";
import mongoose from "mongoose";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();

    const { _id } = req.body;
    const objectId = _id?.$oid ? new mongoose.Types.ObjectId(_id.$oid) : new mongoose.Types.ObjectId();

    const newUser = await User.create({
      _id: objectId,
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@example.com",
      password: "123456",
      isVerified: false,
      isAdmin: false,
    });

    res.status(201).json({ message: "User inserted successfully", user: newUser });
  } catch (error: any) {
    res.status(500).json({ message: "Failed to insert data", error: error.message });
  }
}
