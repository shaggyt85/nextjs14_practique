export default function MainProductionCb({ products }: { products: any[] }) {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products?.map((product: any) => (
                    <li key={product.id}>
                        {product.title} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
