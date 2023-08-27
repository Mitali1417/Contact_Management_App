import React from "react";
// import ContactForm from './ContactForm'
import { Link } from "react-router-dom";
import styles from "../style";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/action";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div
        className={`${styles.flexCenter} w-full max-w-[1400px] h-full min-h-[90vh]  sm:min-h-[95vh] flex-col backdrop-blur-3xl px-6 sm:px-10 md:px-32 sm:py-20  my-24 sm:my-10 rounded-[10px] shadow-2xl `}
      >
        <div className="border-[1px] rounded-[10px] border-transparent mt-5 bg-black hover:bg-[#151515] hover:border-transparent hover:scale-[1.03] ease-in-out duration-200  px-4 py-2 sm:my-3 flex justify-center">
          <Link to="/contact-form" className="text-white hover:text-white ">
            Create Contact
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-4">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex flex-col justify-center items-center mb-4 mx-2 bg-[#151515]  rounded-[10px] p-4"
              >
                <div className="flex flex-row text-[#f09800] font-medium ">
                  <p>{contact.firstName}</p>
                  <p>&nbsp;</p>
                  <p>{contact.lastName}</p>
            
                </div>
                  <p className="text-white font-light text-sm ">{contact.phoneNo}</p>
                <div className="flex flex-row justify-center items-center mt-4 text-sm">
                  <button onClick={() => handleDelete(contact.id)} className="text-white hover:text-white rounded-[6px] bg-[#f09800] hover:bg-[#f09800]/60 py-1 px-3 ">
                    Delete
                  </button>
                  <button className="ml-1">
                    <Link
                      to={`/edit/${contact.id}`}
                      className=" text-white hover:text-white rounded-[6px] bg-[#f09800] hover:bg-[#f09800]/60 py-1 px-3"
                    >
                      Edit
                    </Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className=" border-[1px] flex sm:flex-row flex-col rounded-[10px] p-4 w-[80%] sm:w-[80%]  bg-[#151515] border-transparent">
              <div className="border-[1px] mb-2 sm:mb-0 text-white border-transparent bg-[#f09800] rounded-full p-2 w-10 h-10 mr-3 text-center">
                <p>X</p>
              </div>
              <div >
                <p className="text-[#f09800]">No Contact Found</p>
                <p className="text-white">Please add Contact from Create Contact Button</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactList;
