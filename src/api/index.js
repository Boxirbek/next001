export default async function handler(req, res) {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.slice(0, 3).map((product) => ({
        image: product.image,
        title: product.title,
        brand: product.brand,
    }));
    res.status(200).json(products);
}
