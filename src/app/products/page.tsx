import Link from 'next/link'

export default function ProductList() {
    const id = 100
    return (
        <>
            <h1>product list</h1>
            <Link href='/products/1'>product 1</Link>
            <Link href='/products/2'>product 2</Link>
            <Link href='/products/3' replace>product 3</Link>

            <Link href={`/products/${id}`}>product 1</Link>
        </>
    )
}