const Home = ()=>{
    return(
       <div className="lg:pl-[350px] w-full h-screen">
          <div className="w-full h-full lg:border-solid lg:border-[#ebebeb] lg:border-l">
              <div className="h-full w-full flex items-center justify-center ">
                <div className="wrapper-3D">
                <div className="relative uppercase Poppins tracking-[3px] mb-[5px] text-[12px] sub-heading">A Personal Site</div>
                <h1 className="lg:text-[12vw] text-[20vw] lg:ms-[70px] leading-[1.2] font-[800]">A<span className="heading-3D">rna</span>b.</h1>
                <div className="w-full flex justify-center lg:justify-end">
                 <p className="Poppins text-[16px] lg:text-[25px] font-extralight text-[#919191] tracking-[1px] ">I am a Web Developer &amp; Student <br/>Based in India</p>
                 </div>
                </div>
              </div>
          </div>
       </div>
    )
}

export default Home;