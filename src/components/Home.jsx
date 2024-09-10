import '../css/home.css';

const Home = () => {
    return (
        <>
            <div className="bgImg  h-[86vh] lg:h-[90vh]">
                <div className='flex flex-col justify-center items-center mb-[190px]'>
                    <span className='nunito text-[13px] pt-10'>DYNAMIC DESIGN OF PORTFOLIO</span>
                    <div className='mainContent flex flex-col justify-center items-center text-[45px] sm:text-[60px] '>
                        <span>Welcome to My </span>
                        <span className='purple font-bold'>Portfolio</span>
                    </div>

                    <span className='mainContent text-[40px] sm:text-[60px] '>My Name is _____</span>

                    <div className='footerInfo flex flex-col justify-center items-center text-[20px] sm:text-[25px] '>
                        <span>Hello, I am <b>Ayan Banglawala</b>, a </span>
                        <span className='purple font-bold'>MERN stack Developer</span>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home