import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-black pb-10 pt-10 text-white flex flex-col md:flex-row flex-wrap gap-10 md:gap-14 justify-center items-center md:items-start px-5">
            <div className="flex cursor-pointer flex-col gap-3 text-center md:text-left">
                <h2>Exclusive</h2>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <form action="">
                    <input
                        className="bg-black text-gray-300 border border-white py-1 px-2 w-full md:w-auto"
                        placeholder="Enter your email"
                        type="text"
                    />
                </form>
            </div>
            <div className="flex cursor-pointer flex-col gap-3 text-center md:text-left">
                <h2>Support</h2>
                <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="flex cursor-pointer flex-col gap-3 text-center md:text-left">
                <h3>Account</h3>
                <p>My Account</p>
                <p>Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
            </div>
            <div className="flex cursor-pointer flex-col gap-3 text-center md:text-left">
                <h3>Quick Link</h3>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left">
                <h2>Download App</h2>
                <p>Save $3 with App New User Only</p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Image src='/Qrcode.png' width={80} height={50} alt="QR Code Image" />
                    <div className="flex flex-col gap-2">
                        <Image src='/GooglePlay.png' width={120} height={40} alt='Google Play Image' />
                        <Image src='/appstore.png' width={120} height={40} alt="App Store Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}
