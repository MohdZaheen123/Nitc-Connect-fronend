'use client'

import Notfound from "@/components/Notfound";
import { useSession } from "next-auth/react"
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react";


export default function page() {
    const { data: session } = useSession()
    const { toast } = useToast()

    interface Item {
        title: string;
        description: string;
        contact: string;
        category: string;
        _id: string
    }

    const [data, setData] = useState<Item[]>([])


    const handledelete = async (category, id, title, i) => {

        try {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/${category}s/delete${category}/${id}`
            const deletedata = await fetch(url, {
                method: 'DELETE'
            })
            const msg = await deletedata.json()
            if (msg.message) {
                toast({
                    title: `Deleted ${category} Sucessfully `,
                    description: `${title} has been deleted`,
                })
                const newarr = data
                newarr.splice(i, 1)
                setData(newarr)
            }
            else {
                toast({
                    title: `${category} not deleted `,
                })
            }
        } catch (error) {
            console.log(error)
        }


    }

    if (session) {
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const d1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/userproducts/${session?.user?.email}`, {
                        cache: 'no-store'
                    })
                    const data1 = await d1.json()
                    const d2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tickets/usertickets/${session?.user?.email}`, {
                        cache: 'no-store'
                    })
                    const data2 = await d2.json()
                    const totaldata = [...data2, ...data1];
                    setData(totaldata)
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }, []);


        return (
            <div className=" mx-auto bg-blue-100 min-h-screen">
                <div className="max-w-6xl">
                    {data.length != 0 && data?.map((item, i) => (
                        <div key={i} className="bg-blue-300 my-3 rounded-xl p-3 h-fit">
                            <p className="text-xl font-semibold">{item.title}</p>
                            <p className='mb-3'>{item.description}</p>
                            <button className='bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-xl' onClick={() => { handledelete(item.category, item._id, item.title, i) }}>Delete</button>
                        </div>
                    ))}
                </div>
                {data.length == 0 && <div className="pt-10"><p className='text-center text-xl font-semibold'>You Have Not Listed Anything Yet!!</p></div>}
            </div>
        )
    } else {
        return (
            <Notfound />
        )
    }
}
