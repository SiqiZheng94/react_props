import Blog from "../component/Blog.tsx";
import Header from "../component/Header.tsx";
import Reviews from "../component/Reviews.tsx";


export default function Page(){

    return(
        <>
            <Header/>
            <Reviews/>
            <Blog/>

        </>
    )
}