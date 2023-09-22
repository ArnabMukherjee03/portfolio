import Arnab from "../Image/Arnab.jpg";
import pdf from "../Pdf/ArnabMukherjee_Resume.pdf"


const About = ()=>{

    return(
        <div className="lg:pl-[350px] w-full h-full ">
            <div className="w-full h-full border-solid border-[#ebebeb] border-l py-[100px] px-[20px] lg:px-[50px]">
                <h1 className="mx-auto w-fit font-primary text-3xl mb-[50px]">About Me</h1>
                <img src={Arnab} className="lg:w-[40%] w-[80%]  mb-10 mx-auto" alt="" />
                <div className="w-full  pb-7 border-[#DFDFDF] border-b-[1px]">
                    <div className="w-[150px] cursor-pointer mx-auto font-primary text-center px-[14px] py-[12px] bg-black text-white" >
                     <a href={pdf} target="_blank" rel="noreferrer">Download CV</a>
                    </div>
                    <h3 className="mt-5 text-[22px] font-primary  mx-auto w-fit">Arnab Mukherjee</h3>
                    <p className="font-secondary w-fit mx-auto text-sm">Web Developer</p>
                </div>
                <div className="pt-8 font-secondary pb-8 border-[#dfdfdf] border-b-[1px]">
                <p className="text-sm text-center lg:text-left">
                Hello! I'm Arnab Mukherjee, a dedicated computer science student and MERN (MongoDB, Express.js, React, Node.js) developer based in India. Web development is my passion, and I thrive on crafting exceptional digital experiences.
                </p>
                <p className="pt-3 text-sm text-center lg:text-left">
                My proficiency in the MERN stack allows me to create dynamic and interactive web applications that prioritize user satisfaction. Clean and scalable code is my priority, ensuring seamless functionality and future growth.
                </p>
                </div>
            </div>
        </div>
    )
}

export default About;