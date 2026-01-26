import { v2 as cloudinary } from "cloudinary";

//Add Product : /api/product/add
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);

    const images = req.files;

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );
  } catch (error) {}
};

//Get Product : /api/product/list
export const productList = async (req, res) => {};

//Get single Product : /api/product/id
export const productById = async (req, res) => {};

//Change Product inStock : /api/product/stock
export const changeStock = async (req, res) => {};
