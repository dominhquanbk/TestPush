import logo from "../../img/Header/logo.png"
import SearchBar from "./searchbar"
import { useState } from "react"

export default function Header(props){
    const [showSublist1, setShowSublist1] = useState(false);
    const [showBooking, setShowBooking] = useState(false);

    return(
        // global container
        <div className="flex flex-col m-8  border-b-2 border-slate-400	">
            {/* top part */}
            <div className="flex items-start justify-between">
                {/* image */}
                <img src={logo} alt="Logo" className="w-60 "onClick={()=>{props.setWhatPage("Mainpage");setShowSublist1(false);setShowBooking(false)}}/>
                <SearchBar/>
                {/* button */}
                <div>
                        <button className="middle none center mr-4 rounded-lg bg-blue-500 py-2 px-6 font-sans text-xs font-bold 
                        uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 
                        focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
                        disabled:opacity-50 disabled:shadow-none" data-ripple-light="true" onClick={()=>props.setShow("Login")}>
                                        Đăng nhập
                        </button>
                        <button className="middle none center rounded-lg bg-yellow-400 py-2 px-6 font-sans text-xs font-bold 
                        uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 
                        focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
                        disabled:opacity-50 disabled:shadow-none" data-ripple-light="true" onClick={()=>props.setShow("SignUp")}>
                                        Đăng ký
                        </button>
                        
                </div>
                
            </div>
            {/* dropdown list */}
            <div className="mb-10">
                {/* main list */}
                <div className="flex justify-between font-k2d text-lg font-bold ">
                    {/* main list item 1 */}
                    <div onClick={() => {setShowSublist1(!showSublist1);setShowBooking(false);props.setWhatPage("ProductMain")}}  className={`hover:scale-110 transition-all ${showSublist1 ? 'text-yellow-400 ' : ''}`}>
                        Sản phẩm thú cưng
                        
                    </div>
                        {/* sub list 1 */}
                        {showSublist1 && (
                                
                                <div className="absolute  p-2 top-[130px]  text-black text-base flex justify-center w-[100%] font-normal ">
                                    <div className="px-10 hover:scale-110 transition-all">Thức ăn thú cưng</div>
                                    <div className="px-10 hover:scale-110 transition-all">Phụ kiện & Đồ chơi</div>
                                    <div className="px-10 hover:scale-110 transition-all">Đồ dùng vệ sinh</div>
                                    <div className="px-10 hover:scale-110 transition-all">Nhà thú cưng</div>
                                    <div className="px-10 hover:scale-110 transition-all">Đồ dùng thú y </div>
                                </div>
                            )}
                    <div onClick={() => { setShowBooking(!showBooking); setShowSublist1(false) }} className={`hover:scale-110 transition-all ${showBooking ? 'text-yellow-400 ' : ''}`}>
                         Đặt lịch hẹn
                    </div>
                        {/* sub list 2 */}
                        {showBooking && (
                            
                            <div className="absolute  p-2 top-[130px]  text-black text-base flex justify-center w-[100%] font-normal">
                                <div className="px-10 hover:scale-110 transition-all">Thức ăn thú cưng 1</div>
                                <div className="px-10 hover:scale-110 transition-all">Phụ kiện & Đồ chơi 2</div>
                                <div className="px-10 hover:scale-110 transition-all">Đồ dùng vệ sinh 3</div>
                                <div className="px-10 hover:scale-110 transition-all">Nhà thú cưng 4</div>
                                <div className="px-10 hover:scale-110 transition-all">Đồ dùng thú y 5 </div>
                            </div>
                        )}
                    <div className={`hover:scale-110 transition-all ${showBooking ? 'text-yellow-400 ' : ''}`}>Nhận nuôi thú cưng</div>
                    <div className={`hover:scale-110 transition-all ${showBooking ? 'text-yellow-400 ' : ''}`}>Yêu cầu cứu hộ</div>
                    <div className={`hover:scale-110 transition-all ${showBooking ? 'text-yellow-400 ' : ''}`}>Về chúng tôi</div>
                    
                    
                </div>
            </div>
        </div>
    )
}