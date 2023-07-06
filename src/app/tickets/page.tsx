
"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';





export default function page() {

    interface Ticket {
        title: string;
        description: string;
        contact: string
    }

    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        loadTickets();
    }, []);

    const loadTickets = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tickets/alltickets?page=${page}`);
            const data = await response.json();
            if (data.count >= 1) {
                const newTickets = data.data;
                setTickets(tickets.concat(newTickets))
            }
            if (data.totalPages != data.currentPage) {
                setPage(page + 1);
            }
            else {
                setHasMore(false)
            }
        } catch (error) {
            console.error('Error loading products:', error);
        }
    };


    return (

        <InfiniteScroll
            dataLength={tickets.length}
            next={loadTickets}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >

            <div className="bg-blue-100 min-h-screen pt-10 px-10 ">
                <div className="flex items-center justify-center md:justify-normal">
                    <p className="text-xl font-semibold">Grab your ticket deals now!!</p>
                    <img className="rounded-full mix-blend-multiply" src="/tickets.gif" alt="ticket animation" />
                </div>
                <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
                    <div className=" flex flex-col justify-center items-center w-full">

                        {tickets.length != 0 && tickets.map((item: Ticket, index: number) => (
                            <div className="my-2 px-5 w-full h-full min-h-[5rem] bg-indigo-900 text-white border-black border rounded-xl min-w-[80vw] flex flex-col">
                                <p className='text-xl font-bold text-center md:text-2xl py-3'>{item.title}</p>
                                <p>{item.description}</p>
                                <Link href={`https://wa.me/+91${item.contact}?text=Hi, I would like to enquire about ${item.title} you posted in Nitc connect`} className='bg-blue-300 text-black w-20 text-center font-semibold rounded-xl my-3'>Contact</Link>
                            </div>
                        ))}
                        {tickets.length == 0 && <div><p className='text-center text-xl font-semibold'>No Tickets Listed Yet!!</p></div>}
                    </div>
                </div>
            </div>
        </InfiniteScroll>
    )
}
