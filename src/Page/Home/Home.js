import React from 'react';
import img from '../../Assets/bg.png';
import img2 from '../../Assets/bg2.svg';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <div className="  min-h-screen bg-base-200 pt-5 ">
                <div className=" flex flex-col-reverse lg:flex-row  text-center justify-center items-center px-20">
                    <img alt='' src={img} className="w-96 lg:w-[40%]  mx-20" />
                    <div className=' '>
                        <h1 className="text-5xl font-bold">The best way to learn to code</h1>
                        <p className="py-6">Courses designed by experts with real-world practice. Join our global community. </p>
                        <Link to='/login' className="btn btn-primary">Start Learning now!</Link>
                        <div className="divider mx-40">OR</div>
                        <div className=' flex flex-col lg:flex-row gap-5 w-72 mx-auto'>
                            <button className="btn bg-[#D9392B] border-0"><FaGoogle className='text-2xl mr-5' />Google</button>
                            <button className="btn"><FaGithub className='text-2xl mr-3' />Github</button>
                        </div>
                    </div>

                </div>
                <img src={img2} className="mx-5" alt="" />
            </div>
        </>
    );
};

export default Home;