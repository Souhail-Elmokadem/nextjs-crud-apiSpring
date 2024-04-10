import Hero from '../components/Hero';
import { fetchdata } from '../helpers/api'
import Link from 'next/link';
import ChildHeroCont from '../components/ChildHeroCont';

export default async function Page() {
    const posts = await fetchdata();
    
    return(
        <>
        <Hero>
            <ChildHeroCont title="Home" banner={true} content="Using useEffect to run on the client only"/>
        </Hero>
    </>
    );
  }