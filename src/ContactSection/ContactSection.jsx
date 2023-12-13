import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import ContactForm from "./ContactForm";

const ContactSection = () => (
  <div className="max-w-screen-xl mx-auto p-6 mt-10">
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-lg text-gray-600 mb-4">
        I am currently looking for a full-time role as a MERN stack developer.
        If you have any questions, please feel free to contact me.
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pl-7">
        {/* Call Section */}
        <div
          className="flex flex-col group cursor-pointer"
          onClick={() => (window.location.href = "tel:+8801303075677")}
        >
          <span className="flex text-3xl gap-4 mb-2 transition duration-300 group-hover:text-blue-500">
            <AiFillPhone />
            <span className="group-hover:text-blue-500 text-xl">Call</span>
          </span>
          <span className="text-xl hover:text-blue-500  transition-shadow md:text-base">+8801763902654</span>
        </div>

        <div
          className="flex flex-col group cursor-pointer mt-4 md:mt-0"
          onClick={() =>
            (window.location.href = "mailto:arafathoalder456@gmail.com")
          }
        >
          <span className=" flex gap-4  text-4xl mb-2 transition duration-300 group-hover:text-blue-500">
            <AiOutlineMail />
            <span className="group-hover:text-blue-500 text-xl">Email</span>
          </span>
          <span className="text-base hover:text-blue-500 md:text-base mt-4 md:mt-0">
            arafathoalder456@gmail.com
          </span>
        </div>
        {/* Contact Form */}
        <div className="flex w-full flex-col">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
