import {Link} from "react-router-dom"
const Blog = () => {
    const Blog = [{
        title:"Next-Level JavaScript: A Sneak Peek into ECMAScript 2023 and a Glimpse of What Awaits in 2024",
        subtitle:"Unveiling the Latest and Anticipating the Future - Keeping up to date with the latest developments in ECMAScript can be quite challenging, and finding perfect code example can be even more difficult.",
        link:"https://medium.com/javascript-in-plain-english/next-level-javascript-a-sneak-peek-into-ecmascript-2023-and-a-glimpse-of-what-awaits-in-2024-acd38be719b9",
        tag: ['javascript','ecmascript']
    }]
  return (
    <div className="lg:pl-[350px] w-full h-full ">
      <div className="w-full h-full border-solid border-[#ebebeb] border-l py-[100px] px-8 lg:px-[50px]">
        <h1 className="mx-auto w-fit  text-2xl mb-[50px] font-primary font-[400]">Blogs</h1>
        <div className="flex flex-col justify-between">
            {
                Blog.map(blog=>{
                    return(
                        <div className="w-[100%] lg:w-[80%]  mx-auto">
                            <h1 className="font-primary text-black text-base lg:text-lg leading-5"><Link to={blog && blog.link}>{blog && blog.title}</Link></h1>
                            <p className="font-secondary mt-2 text-[#767676] text-xs">{blog && blog.subtitle}</p>
                            <p className="font-primary uppercase text-sm mt-2">#{blog.tag && blog.tag[0]} #{blog.tag && blog.tag[1]}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Blog;
