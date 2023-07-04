"use client"


import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export default function page() {


    interface Product {
        title: string;
        description: string;
        _id: string;
        image: string
    }

    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/allproducts?page=${page}`);
            const data = await response.json();
            if (data.count >= 1) {
                const newProducts = data.data;
                setProducts(products.concat(newProducts))
            }
            if (data.totalPages != data.currentPage) {
                setPage(page + 1);
            }
            else {
                setHasMore(false)
            }
            // setPage(page + 1);
            { console.log(products) }
        } catch (error) {
            console.error('Error loading products:', error);
        }
    };

    return (

        <InfiniteScroll
            dataLength={products.length}
            next={loadProducts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >

            <div className="bg-blue-50 min-h-screen pt-10 px-2 md:px-10">

                <p className="text-xl font-semibold">Grab your deal now!!</p>
                <div className="pt-20 flex flex-wrap gap-6 justify-center items-center">
                    {products.length != 0 && products?.map((item: Product, index: number) => (
                        <div key={index} className="">
                            <div className="h-80 w-44 md:w-60 md:h-96 bg-red-300 rounded-xl border-yellow-400 flex flex-col mb-7">
                                <div className="w-full">
                                    <img src={item?.image} alt="product image" className="w-full rounded-xl" />
                                </div>
                                <div className='mx-2'>
                                    <p className='font-semibold pt-2'>{item?.title}</p>
                                    <p className='text-sm md:text-base pt-5'>{item?.description}</p>
                                    <Link href={`/product/${item?._id}`} className={cn(buttonVariants(), 'mt-2')}>Learn More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    {products.length == 0 && <div><p className='text-center text-xl font-semibold'>No Products Listed Yet!!</p></div>}

                </div>
            </div>
        </InfiniteScroll>

    )
}
