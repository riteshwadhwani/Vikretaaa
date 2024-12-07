import React from 'react';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';

const AboutUs = () => {
    return (
        <div className=' text-white flex flex-col justify-center items-center'>
            <div className="flex flex-col justify-center items-center px-4 lg:w-[1300px]">

                {/* Title Section */}
                <div className="text-center mt-12 md:flex md:flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        <span className="text-green-400">Vikreta</span> an online auction marketplace
                    </h1>
                    <p className="mt-4 text-lg md:text-lg text-justify ">
                        Vikreta is an online auction marketplace where sellers can list
                        their products and set their prices. Customers can then place bids
                        on the products they are interested in, allowing them to compete with
                        other buyers. This creates a dynamic environment where buyers can try
                        to get the best price, and sellers can benefit from the competition.
                    </p>
                </div>

                {/* Our Project Images */}
                <div className="flex flex-wrap justify-center gap-4 p-4 mt-5">
                    <img
                        src={img1}
                        alt="Photo 1"
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-md"
                    />
                    <img
                        src={img2}
                        alt="Photo 2"
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-md"
                    />
                    <img
                        src={img3}
                        alt="Photo 3"
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-md"
                    />
                </div>

                {/* Project Description */}
                <div className="flex justify-center items-center md:p-4 mt-4">
                    <p className="text-center text-xl sm:text-2xl md:w-3/4">
                        Vikreta brings an innovative auction platform where customers and sellers can interact and
                        set their own prices for products. The platform leverages new technology to enhance user
                        experience, providing a seamless bidding process.
                    </p>
                </div>

                {/* Founding Story Section */}
                <div className="flex flex-col md:flex-row w-full justify-center items-center mt-10 mb-10 ">
                    <div className="mt-10 w-full md:w-1/2 text-center md:text-left md:ml-8">
                        <h1 className="text-green-400  sm:ml-0 md:ml-0 text-2xl">OUR FOUNDING STORY</h1>
                        <p className="text-xl  sm:ml-0 md:ml-0 mt-4 text-justify">
                            Vikreta started with a simple idea: to create a marketplace where buying and selling could
                            be exciting and fair for everyone. We noticed that most online platforms lacked the thrill of
                            auctions and wanted to build a place where anyone, from small sellers, could
                            easily auction their products and reach buyers everywhere. With a passion for helping people connect
                            and trade, we created Vikreta to make buying and selling simple, trustworthy, and fun.
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 w-full md:w-1/2 flex justify-center p-4">
                        <img
                            src={img4}
                            alt="Founding Story Image"
                            className="w-full sm:w-96 h-80 object-cover rounded-md"
                        />
                    </div>
                </div>

                {/* Vision and Mission Section */}
                <div className="md:flex w-full  justify-center items-center mt-18 mb-10 p-4">
                    {/* Vision Section */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <p className="text-xl text-justify">
                            <h1 className="text-green-400 text-2xl">OUR VISION</h1>
                            Our mission is to help sellers easily showcase and auction their products while
                            giving buyers a fun and safe bidding experience. We want to create a community where
                            everyone, from individuals to businesses, can trade with trust and ease. We also aim to
                            support the environment by encouraging sustainable buying and selling.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="w-full md:w-1/2">
                        <p className="text-xl text-justify ml-0 md:ml-10">
                            <h1 className="text-green-400 text-2xl">OUR MISSION</h1>
                            To build a one-of-a-kind online platform where anyone can sell products through auctions,
                            connect with buyers around the world, and enjoy a safe, fair, and exciting shopping experience for
                            everyone. We aim to make selling easy, buying fun, and every transaction trustworthy,
                            creating a global community for people to trade with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
