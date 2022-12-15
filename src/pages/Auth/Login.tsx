import React, { useEffect } from "react";
import Button from "../../components/button/Button";
import Card from "../../components/Card/Card";

import Input from "../../components/Input/Input";

import "./auth.css";

const Login = () => {
  useEffect(() => {
    // const windowScroll = window.scrollY;
    console.log("window scroll", window.scrollY);
  }, []);

  return (
    <>
      <div className="bg-image-auth absolute top-0 left-0 right-0 pt-20 md:pt-48">
        <div className="flex flex-col items-center justify-center w-[90%] md:w-[60%] mx-auto text-white text-center">
          <h2 className="text-4xl md:text-7xl mb-5 md:mb-10 mt-[150px] md:mt-5">
            Login To Your Account
          </h2>
        </div>
      </div>
      <section className="mt-[350px] md:mt-[480px] p-6 md:p-0">
          <div className="container mx-auto my-24">
            <h3 className="text-4xl text-center">Login</h3>
            <p className="text-center mt-5 mb-4">Lorem ipsum dolor sit amet</p>
            <Card>
              <form className="w-full md:w-[60%] mx-auto">
                <Input placeholder={`Enter your name`} />
                <Input placeholder={`Email Address`} />
                <Button text="Send" classNames={`w-full`} />
              </form>
            </Card>
          </div>
      </section>
    </>
  );
};

export default Login;
