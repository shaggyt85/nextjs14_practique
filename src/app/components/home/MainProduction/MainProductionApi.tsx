export const getProducts = async () => {
    try {
        const response = await fetch(
            `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
            {
                headers: new Headers({
                    "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
                }),
            }
        );
        const { products } = await response.json();
        return products;
    } catch (error) {
        console.error(error);
    }
};
