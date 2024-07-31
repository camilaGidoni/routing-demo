import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export default function ProductDerails({ params }: Props) {
    return (
        <>
            <h1>Detials about product {params.productId}</h1>
        </>
    )
}