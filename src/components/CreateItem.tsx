"use client"

import { useToast } from "@/components/ui/use-toast"
import { useSession } from "next-auth/react"
import Notfound from "@/components/Notfound";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function CreateItem({ item }) {
    const { data: session } = useSession();
    const { toast } = useToast()

    if (session) {
        let schema;
        if (item === 'product') {
            schema = yup.object().shape({
                title: yup.string().required("Title is required"),
                image: yup.mixed().required("Image is required").test('has-length', 'Image Field is required', value => {
                    if (value && value instanceof FileList) {
                        return value.length !== 0;
                    }
                    return true;
                }),
                description: yup.string().required("Description is required"),
                contact: yup.number().required("Contact number is required")
            });
        } else if (item === 'ticket') {
            schema = yup.object().shape({
                title: yup.string().required("Title is required"),
                description: yup.string().required("Description is required"),
                contact: yup.number().required("Contact number is required")
            });
        }

        const { register, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(schema)
        });




        const onSubmit = async (data) => {
            try {

                if (item === 'product') {
                    const formdata = new FormData();
                    formdata.append("file", data.image[0]);
                    formdata.append("upload_preset", "kkfkkjw7");

                    const imgresp = await fetch('https://api.cloudinary.com/v1_1/dllsk4vcg/image/upload', {
                        method: 'POST',
                        body: formdata
                    });

                    const img = await imgresp.json();
                    data.image = img.secure_url;
                }

                data.createdby = session.user?.email;
                let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${item}s/create${item}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                toast({
                    title: `${item} created sucessfully`
                })
            } catch (error) {
                console.log(error)
                toast({
                    title: "Some Error Occured!!!"
                })
            }

        }

        return (
            <div className="bg-blue-950 max-w-7xl w-full rounded-2xl flex items-center justify-center absolute top-28">
                <form id="creteform" className="flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-white text-xl font-semibold py-4">Create your {item}!!</p>
                    {item === 'product' ? <img src="/product.gif" className="h-20" alt="" /> : <img src="/createTicket.gif" className="h-20" alt="" />}

                    <div className="flex flex-col">
                        <label htmlFor="title" className="text-white">Title</label>
                        <input id="title" type="text" className="w-[70vw] p-2 rounded-2xl" placeholder="Title" {...register("title")} />
                        {errors.title && <span className="text-red-400">{errors.title.message?.toString()}</span>}
                    </div>

                    {item === 'product' && (
                        <div className="flex flex-col my-2">
                            <label htmlFor="image" className="text-white">Image</label>
                            <input id="image" type="file" className="w-[70vw] p-2 rounded-2xl text-white" {...register("image")} />
                            {errors.image && <span className="text-red-400">{errors.image.message?.toString()}</span>}
                        </div>
                    )}

                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-white">Description</label>
                        <textarea id="description" cols={145} rows={5} className="w-[70vw] p-2 rounded-2xl" placeholder="Describe the item" {...register("description")} />
                        {errors.description && <span className="text-red-400">{errors.description.message?.toString()}</span>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="contact" className="text-white">Contact</label>
                        <input id="contact" type="text" className="w-[70vw] p-2 rounded-2xl" placeholder="Enter your WhatsApp number" {...register("contact")} />
                        {errors.contact && <span className="text-red-400">{errors.contact.message?.toString()}</span>}
                    </div>

                    <button type="submit" className="bg-blue-100 w-20 h-10 my-7 rounded-xl">Post</button>
                </form>
            </div>
        );
    } else {
        return (<Notfound />);
    }
}
