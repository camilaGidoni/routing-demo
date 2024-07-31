'use client'

import { useRouter } from 'next/navigation';

export default function Order() {
    const router = useRouter();
    const handleClick = () => {
        console.log("placing order");
        router.push('/');
        // router.back() go back to the prev page
        // router.replace() replace the current history entry 
        // instead of adding a new one.
        // router.forward() go to the next page
    }
    return (
        <>
            <h1>Order</h1>
            <button onClick={handleClick}>Place order</button>
        </>
    );
}
