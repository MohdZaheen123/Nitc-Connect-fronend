
import Link from 'next/link'

export default async function Latest() {

// The below data fetching is used when there is a backend. here for demo purpose we are taking data =[]
    // const d = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/latestproducts`, {
    //     cache: 'no-store'
    // })

    // const data = await d.json()
    const data =[];

    return (
        <div className="h-full min-h-screen justify-center flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl font-semibold mt-10">Grab The Latest Deals</h3>
            <div className="flex flex-col w-full px-4 justify-center h-full max-w-6xl">
                <img src="/shopping.gif" alt="illustration" className="h-32 w-32 mx-auto" />
                {data.length != 0 && data?.map((item, i) => (
                    <div key={i} className="bg-blue-300 my-3 rounded-xl p-3 h-fit">
                        <p className="text-xl font-semibold">{item.title}</p>
                        <p className='mb-3'>{item.description}</p>
                        <Link href={`https://wa.me/+91${item.contact}?text=Hi, I would like to enquire about ${item.title} you posted in Nitc connect`} className='bg-blue-900 text-white p-2 rounded-xl'>Contact</Link>
                    </div>
                ))}
                {data.length == 0 && <div><p className='text-center text-xl font-semibold'>No Products Listed Yet!!</p></div>}
            </div>
        </div>
    )
}
