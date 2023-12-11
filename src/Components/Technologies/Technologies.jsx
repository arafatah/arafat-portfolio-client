import { FaDatabase, FaReact } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

const Technologies = () => {
    return (
        <div id="technologies" className="max-w-screen-xl mx-auto p-6 mt-10">
            <div className="">
                <h1 className="text-3xl font-bold mb-4">Technologies</h1>
                <p className="text-lg text-gray-500">
                    I am a MERN stack developer with experience in the following technologies.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 pl-5">
                <div className=" p-4 rounded-md shadow-md">
                <FaReact className="text-2xl"/>

                    <h2 className="text-2xl font-semibold mb-2">Front-End</h2>
                    <p>React, JavaScript, Tailwind CSS</p>
                </div>
                <div className=" p-4 rounded-md shadow-md">
                <FaDatabase className="text-2xl"/>

                    <h2 className="text-2xl font-semibold mb-2">Back-End</h2>
                    <p>Node.js, Express.js, MongoDB</p>
                </div>
                <div className=" p-4 rounded-md shadow-md">
                <MdOutlineDesignServices className="text-2xl"/>

                    <h2 className="text-2xl font-semibold mb-2">UI/UX</h2>
                    <p>Responsive Design, User-Centric Approach, Figma</p>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
