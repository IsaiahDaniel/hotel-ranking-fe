import React, { useEffect } from "react";
import Button from "../../components/button/Button";
import Card from "../../components/Card/Card";

import Food from "../../assets/food.svg";
import Education from "../../assets/school.svg";
import Medical from "../../assets/medical.svg";
import Water from "../../assets/water.svg";
import Love from "../../assets/love.svg";
import Travel from "../../assets/tranvel.svg";

import "./Home.css";

const Home = () => {
  useEffect(() => {
    // const windowScroll = window.scrollY;
    console.log("window scroll", window.scrollY);
  }, []);

  const LIST_MAP = [
    {
      id: 1,
      title: "Healthy Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      linkText: "Make a Donation",
      image: Food,
    },
    {
      id: 2,
      title: "Education",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      linkText: "Make a Donation",
      image: Education,
    },
    {
      id: 3,
      title: "Medical",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      linkText: "Make a Donation",
      image: Medical,
    },
    {
      id: 3,
      title: "Pure Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      linkText: "Make a Donation",
      image: Water,
    },
    {
      id: 4,
      title: "Love & Care",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      linkText: "Make a Donation",
      image: Love,
    },
    {
      id: 4,
      title: "Travel Activities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      linkText: "Make a Donation",
      image: Travel,
    },
  ];

  const BLOGS_LIST = [
    {
      id: 1,
      title: "Mauris Cursus Mattis Molestie Aaculis Oterat Pellentesque",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
      image: require("../../assets/causes.jpeg"),
    },
    {
      id: 2,
      title: "Aenean Tortor Atisus Viverra Adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
      image: require("../../assets/causes.jpeg"),
    },
    {
      id: 3,
      title: "Ultrices Iaculis Nunc Sedaugue Lacus Elementum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
      image: require("../../assets/causes.jpeg"),
    },
  ];

  const TEAMS_LIST = [
    {
      id: 1,
      title: "Stacy Henderson",
      description: "Support Staff",
      image: require("../../assets/team-1.jpeg"),
    },
    {
      id: 2,
      title: "Michael Clark",
      description: "Support Staff",
      image: require("../../assets/team-2.jpeg"),
    },
    {
      id: 3,
      title: "Nick Paterson",
      description: "Support Staff",
      image: require("../../assets/team-3.jpeg"),
    },
    {
      id: 4,
      title: "Alicia Anderson",
      description: "Support Staff",
      image: require("../../assets/team-4.jpeg"),
    },
  ];

  return (
    <>
      <div className="bg-image absolute top-0 left-0 right-0 pt-20 md:pt-48">
        <div className="flex flex-col items-center justify-center w-[90%] md:w-[60%] mx-auto text-white text-center">
          <h2 className="text-4xl md:text-7xl mb-5 md:mb-10 mt-5 md:mt-0">Find the Best Hotels Around you</h2>
          <p className="md:leading-8">
            Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Egestas
            quis ipsum suspendisse ultrices gravida. Sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in. Arcu risus quis varius
            quam quisque id diam. Aliquet enim tortor at auctor urna nunc id
          </p>
          <div className="flex items-center mt-5">
            <Button text="Book Today" />
            <div className="mr-4"></div>
            <Button text="Discover More" dark />
          </div>
        </div>
      </div>
      <section className="mt-[320px] md:mt-[500px] p-6 md:p-0">
        <div className="container mx-auto">
          <Card>
            <h2 className="text-center mt-5 text-4xl">At Hotel<span className="text-[#DFAA5B]">Finder</span> We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
              {LIST_MAP.map((list) => (
                <div className="mx-auto py-10">
                  <img src={list.image} alt={list.title} className="mx-auto" />
                  <h3 className="mt-3 font-bold">{list.title}</h3>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="my-[100px] container mx-auto">
          <h3 className="text-4xl text-center">Our Blogs</h3>
          <p className="text-center mt-5 mb-4">Lorem ipsum dolor sit amet</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BLOGS_LIST.map((cause) => (
              <div key={cause.id}>
                <img src={cause.image} alt={cause.title} />
                <h3 className="text-3xl mt-5 font-bold hover:text-[#FFCD05] cursor-pointer">
                  {cause.title}
                </h3>
                <p className="mt-4">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-[100px] bg-[#FAF6ED] flex flex-col md:flex md:flex-row items-center">
          <div className="md:w-1/2 mr-10">
            <img src={require("../../assets/what-we-are.jpg")} alt="" className="mb-4 w-full" />
          </div>
          <div className="flex flex-col items-start justify-center p-5">

            <div className="w-[70%]">
              <h2 className="text-4xl mb-5">How We are Different</h2>
              <h3 className="font-bold text-4xl mb-4">Rankings</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique et egestas quis.
              </p>
            </div>

            <div className="mt-5 w-[70%]">
              <h3 className="font-bold text-4xl mb-4">Proximity</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique et egestas quis.
              </p>
            </div>

            <div className="space-x-6 mt-5">
              <Button text="Donate Now" />
              <Button text="Learn More" dark />
            </div>
          </div>
        </div>

        <div className="my-[100px] container mx-auto">
          <h3 className="text-4xl text-center">Our Team</h3>
          <p className="text-center mt-5 mb-4">Lorem ipsum dolor sit amet</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center">
            {TEAMS_LIST.map((cause) => (
              <div key={cause.id}>
                <img src={cause.image} alt={cause.title} />
                <h3 className="text-3xl mt-5 font-bold hover:text-[#FFCD05] cursor-pointer">
                  {cause.title}
                </h3>
                <p className="mt-4 text-[#aaaaaa]">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "url('../../assets/bg-fixed.jpg') center center/cover no-repeat " }}>

        </div>

      </section>
    </>
  );
};

export default Home;
