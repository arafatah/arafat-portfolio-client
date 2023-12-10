import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div><Hero></Hero></div>
            <div><Projects></Projects></div>
        </div>
    );
};

export default Home;