import Shophub from "../Image/shophub.png";
import github from "../Image/github-mark.svg"
import {Link} from "react-router-dom"
const Portfolio = () => {
  const Projects = [
    {
      title: "ShopHub - Ecommerce App",
      image: Shophub,
      description:
        "This project aims to provide a seamless and engaging online shopping experience for users, incorporating various essential features and functionalities.",
      github: "https://github.com/ArnabMukherjee03/ecommerce",
      link: "",
    },
    {
      title: "MovieMafia",
      image:
        "https://raw.githubusercontent.com/ArnabMukherjee03/MovieMafia/main/Images/Home.png",
      description:
        "MovieMafia is a React-based movie website that allows users to sort them by genre, view trending and upcoming movies, and show movie details,cast and also show similar movies . The website is designed to be user-friendly and visually appealing.",
      github: "https://github.com/ArnabMukherjee03/MovieMafia",
      link: "https://moviemafiaapp.netlify.app/",
    },

    {
      title: "Fashion",
      image:
        "https://raw.githubusercontent.com/ArnabMukherjee03/Fashion/main/src/Image/Home.png",
      description:
        "This GitHub repository contains an exciting e-commerce project developed using React, a popular JavaScript library for building user interfaces. This project aims to provide a seamless and engaging online shopping experience for users, incorporating various essential features and functionalities.",
      github: "https://github.com/ArnabMukherjee03/Fashion",
      link: "https://fashionproject.vercel.app/",
    },
    {
      title: "News.com",
      image:"https://raw.githubusercontent.com/ArnabMukherjee03/News-Site/main/Images/home.png",
      description: "I have developed a news site using React for state management with Context API. The styling is implemented with Tailwind CSS, and the data is fetched from the NewsAPI using the Fetch method. The site includes a search feature to retrieve news articles. This project showcases my proficiency in these technologies for CV purposes.",
      github: "https://github.com/ArnabMukherjee03/News-Site",
      link: "",
    },
    {
      title: "Voice",
      image:
        "https://raw.githubusercontent.com/ArnabMukherjee03/Voice/main/Demo/screencapture-localhost-3000-2023-08-31-12_14_42.png",
      description:
        "Welcome to the Next.js Blog App! This is a full-stack web application built using Next.js for the frontend and MongoDB for the database. The app allows users to create, read, update, and delete blog posts.",
      github: "https://github.com/ArnabMukherjee03/Voice",
      link: "",
    },
  ];

  return (
    <div className="lg:pl-[350px] w-full h-full ">
      <div className="w-full h-full border-solid border-[#ebebeb] border-l py-[100px] px-8 lg:px-[50px]">
        <h1 className="mx-auto w-fit  text-2xl mb-[50px] font-primary font-[400]">Portfolio</h1>
        <div className="flex flex-wrap justify-between">
          {Projects.map((project) => {
            return (
              <div className="flex flex-col lg:w-[48%] w-[100%] gap-5 mt-4">
                <div className="w-full h-[293px] overflow-hidden">
                  <img
                    src={project && project.image}
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="w-full ">
                  <div className="flex w-full">
                     <h3 className="font-primary w-[90%] text-xl"><Link to={project && project.link}>{project.title}</Link></h3>
                     <Link to={project && project.github}><img src={github} className="w-[24px] h-[24px]" alt="" /></Link>
                  </div>
                  <p className="font-secondary leading-5 text-xs text-[#767676] mt-3">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
