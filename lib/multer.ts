import multer from "multer";
import path from "path";

// Set up multer storage (files will be temporarily stored in memory)
const storage = multer.memoryStorage();

// File filter to allow only images
const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"));
  }
};

// Initialize multer
export const upload = multer({ storage, fileFilter });
