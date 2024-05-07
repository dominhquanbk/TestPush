import Doggo1 from "../img/Greet page/Doggo1.png" 
import Service from "../img/Greet page/Service.png"
import React, { useState, useEffect } from 'react';

export default function Mainpage() {
    const [activeContainer, setActiveContainer] = useState(1); // 1: top, 2: middle, 3: bottom

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;

            const scrollPercentage = (scrollTop) / (documentHeight - windowHeight);

            // Logic to determine which container should be active based on scroll position
            if (scrollPercentage < 0.2) {
                setActiveContainer(1); // Top container
            } else if (scrollPercentage >= 0.2 && scrollPercentage < 0.85) {
                setActiveContainer(2); // Middle container
            } else {
                setActiveContainer(3); // Bottom container
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
         //global container
         <>
      <div className="flex flex-col w-screen bg-rose-50	">
            {/* top container */}
            <div className={`flex flex-col items-center ${activeContainer >= 1 ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500'}`}>
                <div className="text-5xl font-nunito">Chào mừng đến với </div>
                <div className="text-5xl font-nunito"> BK PetCare</div>
                <img src={Doggo1} className="w-[300px] h-[500px] mt-10" alt="Doggo1"></img>
                {/*word container*/}
                <div>
                    <div className=" text-5xl font-bold text-center font-nunito">Gâu Gâu</div>
                    <div className="text-5xl font-bold text-center font-nunito">chăm sóc cho thú cưng của bạn</div>
                    <div className="max-w-[700px] text-center font-montserrat ">Thú cưng là một phần trong cuộc sống của chúng tôi  Mọi người luôn nói về tình yêu, niềm hạnh phúc trong cuộc sống. Hạnh phúc là khi có những người bạn nhỏ đồng hành. Chúng tôi sinh ra để làm một niềm tin cho bạn, giúp cuộc sống và các bé trở nên tốt đẹp và tươi sáng hơn .</div>
                </div>
            </div>
            {/* mid container */}
            <div className={`flex flex-col mt-10 mx-32 items-center ${activeContainer >= 2 ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500'}`}>
                {/* Sản Phẩm */}
                <div className="flex flex-col md:flex-row items-center">
                        {/* first left container */}
                        <div className=" w-[50%] ">
                            <div className="text-4xl font-bold font-k2d">Chúng tôi coi thú cưng của bạn như người nhà</div>
                            <div className="text-xl font-montserrat">Mang đến những sản phẩm an toàn và chất lượng nhất cùng dịch phụ chăm sóc thoải mái để giúp bạn có thú cưng có một ngày tuyệt vời.</div>
                            <button className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-full  md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-full shadow-lg bg-cyan-700 shadow-cyan-100
                    hover:bg-opacity-90 mt-10
                    ">
                    <span className="font-montserrat">Sản Phẩm</span>
                    </button>
                        </div>
                        {/* first right container */}
                        <div className="w-[50%]">
                            <img src={Service} alt="" />
                        </div>
                </div>
                {/* Dịch vụ */}
                <div className="flex flex-col md:flex-row items-center ">
                        {/* second left container */}
                        <div className="w-[50%]">
                            <img src={Service} alt="" />
                        </div>
                        {/* second right container */}
                        <div className=" w-[50%] ">
                            <div className="text-4xl font-bold font-k2d">Quan tâm đến những bé thú cưng cần hỗ trợ</div>
                            <div className="text-xl font-montserrat">Trong ý nghĩa nhân đạo của mình, chúng tội mong muốn giúp đỡ được những bạn thú cưng cô đơn tìm được người chủ tuyệt vời, để hưởng niềm yêu thương trọn vẹn nhất.</div>
                            <div className="flex flex-col md:flex-row mt-4 justify-center">
                                    <button className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-full  md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-full shadow-lg bg-cyan-700 shadow-cyan-100
                                    hover:bg-opacity-90  
                                    ">
                                    <span className="font-montserrat">Nhận nuôi ngay</span>
                                    </button>
                                    <button className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-full  md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-full shadow-lg bg-cyan-700 shadow-cyan-100
                                    hover:bg-opacity-90 md:ml-20 
                                    ">
                                    <span className="font-montserrat">Thông báo cứu hộ</span>
                                    </button>
                            </div>
                           
                        </div>
                        
                </div>
                {/* Bác sĩ */}
                <div className="flex flex-col md:flex-row items-center">
                        {/* third left container */}
                        <div className=" w-[50%] ">
                            <div className="text-4xl font-bold font-k2d">Bạn không hiểu về người bạn nhỏ của mình? Cần những tư vấn hợp lí ?</div>
                            <div className="text-xl font-montserrat">Chúng tôi có thể giúp bạn đưa ra những tư vấn hợp lí về tình hình sức khỏe cũng như thói quen của thú cưng. Nếu cần hỗ trợ một cách trực tiếp, bạn cũng có thể đặt lịch tư vấn trực tiếp tại cửa hàng ngay hôm nay !</div>
                            <div className="flex flex-col md:flex-row mt-4 justify-center">
                                        <button className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-full  md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-full shadow-lg bg-cyan-700 shadow-cyan-100
                                hover:bg-opacity-90  
                                ">
                                <span className="font-montserrat">Nhận nuôi ngay</span>
                                </button>
                                        <button className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-full  md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-full shadow-lg bg-cyan-700 shadow-cyan-100
                                hover:bg-opacity-90 md:ml-20 
                                ">
                                <span className="font-montserrat">Thông báo cứu hộ</span>
                                </button>
                                        
                            </div>
                        </div>
                        {/* second right container */}
                        <div className="w-[50%]">
                            <img src={Service} alt="" />
                        </div>
                </div>
                
            </div>
            {/*Bottom Container */}
            <div className={`flex flex-col items-center ${activeContainer === 3 ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500'}`}>
                <div className="text-4xl font-bold font-k2d max-w-[50%] text-center">Cảm ơn vì đã trở thành một phần trong hành trình của chúng tôi</div>
                <div className="max-w-[50%] text-center font-montserrat">Trong ý nghĩa nhân đạo của mình, chúng tội mong muốn giúp đỡ được những bạn thú cưng cô đơn tìm được người chủ tuyệt vời, để hưởng niềm yêu thương trọn vẹn nhất.</div>
            </div>
      </div>
      
      </>
        
    )
  }