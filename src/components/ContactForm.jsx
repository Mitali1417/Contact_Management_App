import React, { useState } from "react";
import { addContact } from "../redux/action";
import { useDispatch } from "react-redux";
import styles from "../style";

// #000000, #151515, #f8a145, #f07900 and #d35100.

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [status, setStatus] = useState("Active"); // Default to Active
  const dispatch = useDispatch();

  // const contacts = useSelector((state: RootState) => state.contacts);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addContact({ firstName, lastName, status }));
  //   setFirstName("");
  //   setLastName("");
  //   setStatus("Active");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(), // <-- Giving a unique ID
      firstName,
      lastName,
      phoneNo,
      status,
    };
    dispatch(addContact(newContact));
    setFirstName("");
    setLastName("");
    setPhoneNo("");
    setStatus("Active");
  };

  return (
    <>
      <div
        className={`relative w-[99vw] h-[101vh] overflow-hidden ${styles.flexCenter}  flex flex-col justify-center items-center `}
      >
        <form
          onSubmit={handleSubmit}
          className="relative z-[1] flex flex-col justify-center items-center"
        >
          <div className="border-[1px] rounded-[10px] text-white  sm:px-10 md:px-32 px-6 sm:py-24 py-10 mt-24 sm:mt-0 border-transparent backdrop-blur-3xl shadow-2xl ">
            <div className="flex flex-col sm:flex-row justify-between  items-center">
              <label> First Name</label>
              <input
                type="text"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="border-[1px] bg-[#151515] border-[#151515] sm:w-[70%] rounded-[30px] pl-2 px-3 py-[2px]"
              />
            </div>
            <div className="flex  flex-col sm:flex-row justify-between items-center my-2">
              <label> Last Name</label>
              <input
                type="text"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="border-[1px] bg-[#151515] border-[#151515] sm:w-[70%]  rounded-[30px] pl-2 px-3 py-[2px]"
              />
            </div>
            <div className="flex  flex-col sm:flex-row justify-between items-center my-2">
              <label >Phone No.</label>
              <input
                type="text"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
                className="border-[1px] bg-[#151515] border-[#151515] sm:w-[70%]  rounded-[30px] pl-2 px-3 py-[2px]"
              />
            </div>
            <div className="flex items-center ">
              <label> Status</label>
              <div className="flex justify-center pl-10 flex-col ">
                <div>
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={status === "Active"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label className="pl-2">Active</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    checked={status === "Inactive"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label className="pl-2">Inactive</label>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2">
            <button className="border-[1px] rounded-[10px] border-transparent text-white bg-black hover:bg-[#151515] hover:scale-[1.03] ease-in-out duration-200 hover:border-transparent  px-4 py-2 my-3 flex justify-center">
              Save Contact
            </button>
          </div>
        </form>
        <div className="w-96  h-96 absolute top-60    z-0 left-32 bg-gradient-to-tl from-[#f09800] to-black rounded-full  "></div>
        <div className="w-80  h-80 absolute -top-44  z-0 right-32 bg-gradient-to-br from-[#f09800] to-black rounded-full  "></div>
        <div className="w-52   h-52  absolute bottom-0 z-0 right-16 bg-gradient-to-bl from-[#f09800] to-black rounded-full  "></div>
      </div>
    </>
  );
};

export default ContactForm;
