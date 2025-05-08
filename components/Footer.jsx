import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black px-[16px] mt-20 py-[24px] md:pb-20  md:pt-16 text-white flex gap-[40px] md:gap-[20px] justify-center flex-col sm:flex-row">
      <div className="flex cursor-pointer  flex-col gap-3 w-fit">
        <h2>Exclusive</h2>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <form action="">
          <input
            className="bg-black text-gray-300 border border-white py-1 px-2"
            placeholder="Enter your email"
            type="text"
          />
        </form>
      </div>
      <div className="flex cursor-pointer  flex-col gap-3 w-fit">
        <h2>Support</h2>
        <p>111 Bijoy sarani, Dhaka,DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="flex cursor-pointer  flex-col gap-3 w-fit">
        <h3>Account</h3>
        <p>My Account</p>
        <p>Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
      </div>
      <div className="flex cursor-pointer  flex-col gap-3 w-fit">
        <h3>Quick Link</h3>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="flex cursor-pointer  flex-col gap-3 w-fit">
        <h2>Download App</h2>
        <p>Save $3 with App New User Only</p>
        <div className="flex gap-3">
          <Image src="/Qrcode.png" width={80} height={50} alt="qrcode IMage" />
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src="/GooglePlay.png"
                width={100}
                height={70}
                alt="google play image"
              />
            </div>
            <div>
              <Image
                src="/appstore.png"
                width={100}
                height={70}
                alt="app store image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
