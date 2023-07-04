import CreateItem from "@/components/CreateItem";


export default function Page({ params }) {
    return (
        <div className="flex flex-col justify-center items-center bg-blue-400">
            <CreateItem item={params.item} />
        </div>
    )
}
