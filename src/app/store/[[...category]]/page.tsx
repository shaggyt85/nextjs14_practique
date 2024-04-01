interface CategoryProps {
    params: {
        category: string[];
    },
    searchParams?: string;
}

export default function Category (props: CategoryProps) {
    const {category} = props.params
    console.log("props", props)
    return <h1>category:{category}</h1>
}