import { Link } from "react-router-dom";
import { GrFilter } from "react-icons/gr";

import "./hotel.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const HotelsList = () => {
  
  useEffect(() => {
    
  }, []);

  const dispatch = useDispatch();

  const HOTELS_LIST = [
    {
        id: 1,
      name: "Ceent Hotels",
      city: "Jos, Nigeria",
      country: "Nigeria",
      address: "RailField along Elim top suites Hotel",
      image: require("../../assets/hotel-1.webp"),
    },
    {
      id: 2,
      name: "Ceent Hotels",
      city: "Jos, Nigeria",
      country: "Nigeria",
      address: "RailField along Elim top suites Hotel",
      image: require("../../assets/hotel-2.webp"),
    },
    {
      id: 3,
      name: "Ceent Hotels",
      city: "Jos, Nigeria",
      country: "Nigeria",
      address: "RailField along Elim top suites Hotel",
      image: require("../../assets/hotel-3.webp"),
    },
    {
      id: 5,
      name: "Ceent Hotels",
      city: "Jos, Nigeria",
      country: "Nigeria",
      address: "RailField along Elim top suites Hotel",
      image: require("../../assets/hotel-4.webp"),
    },
    {
      id: 6,
      name: "Ceent Hotels",
      city: "Jos, Nigeria",
      country: "Nigeria",
      address: "RailField along Elim top suites Hotel",
      image: require("../../assets/hotel-4.webp"),
    }
  ];

  return (
    <>
      <div className="bg-image-hotels absolute top-0 left-0 right-0 pt-20 md:pt-48">
        <div className="flex flex-col items-center justify-center w-[90%] md:w-[60%] mx-auto text-white text-center">
          <h2 className="text-4xl md:text-7xl mb-5 md:mb-10 mt-[150px] md:mt-5">
            Our Hotels
          </h2>
        </div>
      </div>
      <section className="mt-[320px] md:mt-[580px] p-6 md:p-0">
        <div className="container mx-auto my-24">
          <div className="border p-5 rounded-lg flex">
            <GrFilter size={24} className="mr-5" />
            <p>Filter Hotels By ranking</p>
          </div>
        </div>
        <div className="container mx-auto my-24">
          <h3 className="text-4xl text-left mb-9">5 Star Hotels</h3>
          <div className="grid grid-col-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
            {HOTELS_LIST.map((hotel) => (
              <Link to="/hotels/1" className="rounded-lg">
                <img src={hotel.image} alt={hotel.name} className="rounded-3xl w-[300px] h-[300px]" />
                <h3 className="p-4 text-2xl">{hotel.name}</h3>
                <h3 className="p-2 text-1xl"><span className="font-bold">Address:</span>{hotel.address}</h3>
              </Link>
            ))}
          </div>
          <h3 className="text-4xl text-left mb-9 mt-8">3 Star Hotels</h3>
          <div className="grid grid-col-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
            {HOTELS_LIST.map((hotel) => (
              <div className="rounded-lg">
                <img src={hotel.image} alt={hotel.name} className="rounded-3xl w-[300px] h-[300px]" />
                <h3 className="p-4 text-2xl">{hotel.name}</h3>
                <h3 className="p-2 text-1xl"><span className="font-bold">Address:</span>{hotel.address}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelsList;
