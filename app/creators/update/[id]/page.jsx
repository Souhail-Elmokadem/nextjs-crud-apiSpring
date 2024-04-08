"use client"
import { useRouter } from "next/navigation";
import Hero from "../../../../components/Hero";
import { fetchcreator } from "../../../../helpers/api";


export default async function Update({params}) {
    const router = useRouter();

    const creator = await fetchcreator(params.id);
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const datacrea = {};
        formData.forEach((value, key) => {
            datacrea[key] = value;
        });

    
        const response = await fetch(`http://localhost:8089/api/update/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datacrea),
        })
    
        
        // Handle response if necessary
        router.push('/creators');
        // ...
    }
    
    return (
    <>
    <Hero>
    <form className="max-w-sm mx-auto pt-5" onSubmit={handleSubmit}  method="post">
                {creator && (
                    <div key={creator.id}>
                        <div className="mb-5">

                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input type="text" name="name" defaultValue={creator.name} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Name" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" defaultValue={creator.email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@souhail.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" id="password" name="password" defaultValue={(creator.createdAt).slice(0, 10)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your date</label>
                            <input type="date" id="date" name="createdAt" defaultValue={(creator.createdAt).slice(0, 10)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@souhail.com" required />
                        </div>
                        <button type="submit">Save</button>
                    </div>
                )}
            </form>
    </Hero>
    </>
  )
}
