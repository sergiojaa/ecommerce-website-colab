export default function account() {
    return (
        <div className="relative  mb-40 flex items-center justify-center h-screen">
            <div className="absolute left-16 top-16 ml-5">
                <h3> <span className="text-gray-500 mr-1">Home /</span>  My account</h3>
            </div>
            <div className="absolute flex flex-col gap-1 left-16 top-40 ml-5">

                <h4>Manage My Account</h4>
                <h4 className="ml-7">My Profile</h4>
                <h4 className="ml-7">Address Book</h4>
                <h4 className="ml-7">My Payment Options</h4>
            </div>
            <div className="flex  justify-center items-center">


                <div className="flex bg-white shadow-xl ml-32 mt-40  p-10 flex-col gap-4" >

                    <div>
                        <h4>Edit Your Profile</h4>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex flex-col">
                            <label htmlFor="">First Name</label>
                            <input placeholder="Md" className="w-[300px] h-[40px] bg-[#F5F5F5]" type="text" />
                        </div>
                        <div className="flex  flex-col">
                            <label htmlFor="">Last Name</label>
                            <input placeholder="Rimel" className="w-[300px] h-[40px]  bg-[#F5F5F5]" type="text" />
                        </div>

                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex flex-col">
                            <label htmlFor="">Email</label>
                            <input placeholder="rimel1111@gmail.com" className="w-[300px] h-[40px]  bg-[#F5F5F5]" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Address</label>
                            <input placeholder="Kingston, 5236, United State" className="w-[300px] h-[40px]  bg-[#F5F5F5]" type="text" />
                        </div>

                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Password Changes</label>
                            <div className="flex flex-col gap-5">
                                <input placeholder="Current Password" className="w-[610px] h-[40px] bg-[#F5F5F5]" type="text" />
                                <input placeholder="New Password" className="w-[610px] h-[40px] bg-[#F5F5F5]" type="text" />
                                <input placeholder="Confirm New Password" className="w-[610px] h-[40px] bg-[#F5F5F5]" type="text" />

                            </div>
                            <div>
                                <div className="flex items-center mt-10  gap-3 justify-end">
                                    <p className="cursor-pointer text-[18px]">cancel</p>
                                    <button className=" py-3 rounded-md text-white px-10 bg-red-500">Save changes</button>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}