import Hero from "../../../components/Hero";
import { fetchpost } from "../../../helpers/api"


export default async function Post({params}) {
  const post = await fetchpost(params.slug.replace("_","-"));
  return (
   <>
   <Hero>
    
   </Hero>
   </>
    
  )
}
