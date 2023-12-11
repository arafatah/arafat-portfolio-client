import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-4 text-center">
      <p className='text-2xl font-bold'>MD ARAFAT HOWLADER</p>
      <p>Web Development Course By Programming Hero</p>
      <p>arafatholader456@gmail.com</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/arafatah" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/md-arafat-howlader-688a39183/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
