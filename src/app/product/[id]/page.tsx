import Link from 'next/link'

export default async function page({ params }) {
    interface Product {
        title: string;
        description: string;
        id: string;
        contact: number;
        image: string
    }
    console.log(params.id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`);
    const data: Product = await response.json();
    return (

        <div className="mt-10 flex flex-col justify-around items-center max-w-7xl mx-auto min-h-screen">
            <h2 className='text-xl md:text-3xl py-4 font-semibold font-serif'>{data.title}</h2>
            <img src={data.image} alt="product image" />
            <div className="w-full">
                <p className='my-3 max-w-6xl'>{data.description}</p>
                <Link href={`https://wa.me/+91${data.contact}?text=Hi, I would like to enquire about ${data.title} you posted in Nitc connect`} className='bg-blue-900 text-white p-2 rounded-xl'>Contact</Link>
            </div>
        </div>
    )
}
