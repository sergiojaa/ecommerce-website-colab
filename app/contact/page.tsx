import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className="flex items-center justify-center gap-10 mt-20">
            <div className="flex flex-col h-[400px] gap-3 bg-[#FFFFFF] max-w-max p-10   shadow-xl">
                <div className="flex  items-center gap-5" >
                <FontAwesomeIcon 
                        icon={faPhone} 
                        className="bg-red-500  px-2 py-2 rounded-full "
                        style={{ color: "#ffffff", fontSize: '25px' }} 
                    />
                    <p>Call To Us</p>
                    
                </div>
                <div className="flex flex-col gap-3">
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                </div>
                    <div className="w-[270px] h-[1px] bg-black">
                    </div>
                    <div className="flex  items-center gap-5" >
                         <FontAwesomeIcon 
                        icon={faPhone} 
                        className="bg-red-500  px-2 py-2 rounded-full "
                        style={{ color: "#ffffff", fontSize: '25px' }} 
                    />
                    <p>Call To Us</p>  
                </div>
                <div className="flex flex-col gap-3">
                    <p className="w-[270px]">Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: support@exclusive.com</p>
                </div>
               
            </div>
            <div>
                <div className="shadow-xl p-5 h-[400px]">
                    <form  className="flex flex-col gap-5 " >
                        <div className="flex gap-5">
                        <input 
                         className="bg-[#F5F5F5] w-[200px] h-[40px] "

                        placeholder="Your Name"
                        type="text" />
                         <input 
                         className="bg-[#F5F5F5] w-[200px] h-[40px] "

                        placeholder="Your Email"
                        type="text" />
                         <input 
                         className="bg-[#F5F5F5] w-[200px] h-[40px] "
                        placeholder="Your Phone"
                        type="text" />
                        </div>
                       <div className="flex flex-col gap-5">
                       <textarea 
                        placeholder="Write your message"
                        className="w-[640px] h-[207px] rounded-[4px] bg-[#F5F5F5] p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <div className="flex items-end justify-end ">
                    <button className="bg-[#DB4444] max-w-max text-white px-7 py-3 ">
                        Send Message
                    </button>
                    </div>
                   

                       </div>
                       
                    </form>
                </div>
            </div>
        </div>
    );
}
