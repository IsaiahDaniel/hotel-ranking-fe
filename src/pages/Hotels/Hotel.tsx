import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import Card from "../../components/Card/Card";
// import Input from "../../components/Input/Input";

import "./hotel.css";

const Hotel = () => {

  const [inputs, setInputs] = useState<any>({
    name: "",
    address: "",
    city: "",
    country: "",
    image: "",
  });

  const [file, setFile ] = useState();

  const dispatch = useDispatch<any>();

  
  const handleChange = (e: any) => {
    console.log("running....");
    const target = e.target as HTMLInputElement;
    const targetId = e.target as HTMLElement;

    console.log("e.target.value", e.target.value);

    setInputs((prevState: any) => ({
      ...prevState,
      image: file,
      [e.target.id]: target.value,
    }));
    console.log("changing", target.value);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", inputs.name);
    formData.append("address", inputs.address);
    formData.append("country", inputs.county);
    formData.append("city", inputs.city);
    formData.append("image", inputs.image);

    dispatch(inputs);
    
  };

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
          <h3 className="text-4xl text-left mb-9 mt-8">Ceent Hotels</h3>
          <p className="text-2xl">
            <span className="font-bold">Address:</span> RailField along Elim top
            suites Hotel{" "}
          </p>
          <p className="text-2xl">
            <span className="font-bold">City:</span> Jos
          </p>
          <p className="text-2xl">
            <span className="font-bold">Country:</span> Nigeria
          </p>
          <div className="grid grid-col-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
            <div className="w-[900px] col-span-3">
              <img
                src={require("../../assets/hotel-1.webp")}
                alt=""
                className="w-full"
              />
            </div>
            <div className="col-span-2">
              <Card>
                <h2 className="text-center text-2xl mb-3">Post A new Hotel</h2>
                <form
                  className="w-full md:w-[60%] mx-auto"
                  onSubmit={handleSubmit}
                >
                  <input
                    placeholder={`Hotel Name`}
                    onChange={(e: any) => handleChange(e)}
                    id="name"
                    value={inputs.name}
                  />
                  <input
                    className={`border rounded-lg p-5 w-full active:border-[#A4a4a4]`}
                    placeholder={`Address`}
                    onChange={(e: any) => handleChange(e)}
                    id="address"
                    value={inputs.address}
                  />
                  <input
                    className={`border rounded-lg p-5 w-full active:border-[#A4a4a4]`}
                    placeholder={`City`}
                    onChange={(e: any) => handleChange(e)}
                    id="city"
                    value={inputs.city}
                  />
                  <input
                    className={`border rounded-lg p-5 w-full active:border-[#A4a4a4]`}
                    placeholder={`Country`}
                    onChange={(e: any) => handleChange(e)}
                    id="country"
                    value={inputs.county}
                  />
                  <select className="py-6">
                    <option value="">Choose Hotel Star</option>
                    <option value="5">5 Star Hotel</option>
                    <option value="4">4 Star Hotel</option>
                  </select>
                  <div>
                    <img src={file ? URL.createObjectURL(file) : ""} alt="" />
                  </div>
                  <div className="my-5">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e)}
                    />
                  </div>
                  <Button
                    buttonType="submit"
                    text="Create Hotel Listing"
                    classNames={`w-full`}
                  />
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotel;
