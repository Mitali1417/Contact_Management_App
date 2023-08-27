import React from "react";
import ContactList from "../components/ContactList";

const ContactPage = () => {
  return (
    <>
      <div className=" overflow-hidden w-full max-w-[800px] ">
        <div className=" flex flex-col justify-center items-center">
          <div className="relative z-20  flex flex-col justify-center items-center">
            <ContactList />
          </div>
          <div className="ss:w-96 w-48  ss:h-96 h-48 absolute bottom-32 z-0 ss:left-32 left-0 bg-gradient-to-tl from-[#f09800] to-black rounded-full"></div>
          <div className="ss:w-80 w-28  ss:h-80 h-28 absolute -top-44 z-0 ss:right-32 right-0 bg-gradient-to-br from-[#f09800] to-black rounded-full"></div>
          <div className="ss:w-52 w-32 ss:h-52 h-32 absolute bottom-0 z-0 ss:right-16 right-2 bg-gradient-to-bl from-[#f09800] to-black rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
