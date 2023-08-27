import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../redux/action";
import styles from "../style";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const contact = useSelector((state) =>
    state.contacts.find((c) => c.id === parseInt(id))
  );

  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [phoneNo, setPhoneNo] = useState(contact.phoneNo);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(updateContact(id, { firstName, lastName })); // Dispatch your update action
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateContact({
        id: parseInt(id),
        updatedData: { firstName, lastName, phoneNo },
      })
    );
  };

  return (
    <>
      <div
        className={`${styles.flexCenter} w-full max-w-[600px] min-h-[96.3vh] h-full flex-col justify-center items-center backdrop-blur-3xl px-6 sm:px-10 md:px-32 py-10 my-20 rounded-[10px] shadow-2xl `}
      >
        <form onSubmit={handleSubmit} className="w-full text-white flex flex-col justify-center items-center ">
          <input
            className="border-[1px] my-1 sm:my-0 bg-[#151515] border-[#151515] sm:w-[70%] rounded-[30px] pl-2 px-3 py-[2px]"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="border-[1px] my-1 sm:my-0 bg-[#151515] border-[#151515] sm:w-[70%] rounded-[30px] pl-2 px-3 py-[2px]"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="border-[1px] my-1 sm:my-0 bg-[#151515] border-[#151515] sm:w-[70%] rounded-[30px] pl-2 px-3 py-[2px]"
            type="text"
            placeholder="Last Name"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <button  className="border-[1px] rounded-[10px] border-transparent bg-black  hover:bg-[#151515] text-white hover:text-white hover:scale-[1.03] ease-in-out duration-200 hover:border-transparent  px-4 py-2 my-3 flex justify-center" type="submit">Save Changes</button>
        </form>
      </div>
    </>
  );
};

export default Edit;
