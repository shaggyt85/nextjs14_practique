import Image from "next/image"

const getProducts = async () => {
    try {
        const response =  await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
            headers: new Headers({
                'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ''
            })
        })
        const {products} = await response.json()
        return products
    } catch (error) {
        console.error(error)
    }
}

export const MainProduction = async () => {
    const products = await getProducts()
    console.log(products)
    return (
        <section>
            <h3>New Products Released</h3>
            <div>
                {products?.map((product: any) => {
                    const imageSrc = product.images[0]?.src;
                    return (
                        <article key={products.id}>
                            <p>{products.title}</p>
                            <Image src={imageSrc} fill alt={product.title} loading="eager" />
                        </article>
                    );
                })}
            </div>
        </section>
    )
}