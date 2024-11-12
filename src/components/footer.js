import Button from "./button";
import InputGray from "./input_gray";

export default function Footer() {
	return (
		<div className="content w-full flex flex-col items-center justify-center pt-[1rem] pb-[1rem] md:pt-[0rem] md:pb-[6rem] px-[2rem] md:px-[8rem] text-[1.2rem] bg-black md:bg-transparent">
			<div className="hidden md:flex w-full grow-1 items-start gap-24">

				<div className="flex flex-col grow items-start justify-center gap-2">
					<img className="mb-2" src="/logo.svg" alt="" />
					<div className="flex gap-2 items-center">
						<img src="/gmail.svg" alt="" />
						<span>text@example.com</span>
					</div>
					<div className="flex gap-2 items-center">
						<img src="/location.svg" alt="" />
						<span>4140 California.  place of work 31134</span>
					</div>
				</div>

				<div className="flex flex-col grow text-[1.2rem] gap-4 items-start">
					<div className="font-['Syne-Bold'] text-[1.4rem]">Company</div>
					<a href="#">About Us</a>
					<a href="#">Services</a>
					<a href="#">Contact Us</a>
				</div>

				<div className="flex flex-col grow text-[1.2rem] gap-4 items-start">
					<div className="font-['Syne-Bold'] text-[1.4rem]">Company Service</div>
					<a href="#">Pricing Plan</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms & Conditions</a>
				</div>

				<div className="flex flex-col grow text-[1.2rem] gap-4 items-start text-left">
					<div className="font-['Syne-Bold'] text-[1.4rem]">Subscribe to Our Newsletter</div>
					<span>Enter your email below to be the first to know about<br /> new collections.</span>
					<InputGray />
				</div>

			</div>

			<div className="hidden md:block w-full border-solid border-t-[2px] border-[#323232] mt-8 mb-4"></div>

			<div className="flex flex-col md:flex-row w-full justify-between items-center gap-[1rem] md:gap-0">
				<div className="text-[0.8rem] md:text-[1.2rem]">©2024 Bigtimeridez All Rights are reserved️ </div>
				<div className="flex gap-4  md:gap-8">
					<a className="w-[20px] md:w-[32px]" href="#"><img className="w-full" src="/facebook.svg" alt="" /></a>
					<a className="w-[20px] md:w-[32px]" href="#"><img className="w-full" src="/instagram.svg" alt="" /></a>
					<a className="w-[20px] md:w-[32px]" href="#"><img className="w-full" src="/x.svg" alt="" /></a>
				</div>
			</div>

		</div>
	)
}