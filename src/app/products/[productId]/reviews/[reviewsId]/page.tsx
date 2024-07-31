import { notFound } from 'next/navigation'

export default function ReviewDetails({ params }:{
    params: {
        productId: string
        reviewsId: string
    }
}) {
    if(parseInt(params.reviewsId) > 1000) {
        notFound()
    }
    return (
        <>
        <h1>Detials about product {params.productId} Review {params.reviewsId}</h1>
        </>
    )
}