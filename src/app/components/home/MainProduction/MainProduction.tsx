import Image from "next/image";
import { getProducts } from "@/app/components/home/MainProduction/MainProductionApi";
import MainProductionCb from "./MainProductionCb";

export const MainProduction = async () => {
    const products = await getProducts();
    return (
        <section>
            <MainProductionCb products={products} />
        </section>
    );
};
