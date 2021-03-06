import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
	return (
		<footer className="bg-black  p-8">
			<div>
				<div className="grid grid-cols-2 justify-items-center">
					<div className="grid lg:grid-cols-3 gap-8  text-xs ">
						<div className="text-white flex flex-col font-bold space-y-2">
							<a href="https://www.nike.com/gift-cards">GIFT CARDS</a>
							<a href="">PROMOTIONS</a>
							<a href="">FIND A STORE</a>
							<a href="">SIGN UP FOR EMAIL</a>
							<a href="">BECOME A MEMBER</a>
							<a href="">NIKE JOURNAL</a>
							<a href="">SEND US FEEDBACK</a>
						</div>
						<div className="flex flex-col text-white">
							<a href="" className="font-bold">
								GET HELP
							</a>
							<div className="space-y-2 flex flex-col text-gray-400 font-medium">
								<a href="">Order Status</a>
								<a href="">Shipping and Delivery</a>
								<a href="">Returns</a>
								<a href="">Payment Options</a>
								<a href="">Gift Card Balance</a>
								<a href="">Contact Us</a>
							</div>
						</div>
						<div className="flex flex-col">
							<a href="" className="text-white font-bold">
								ABOUT NIKE
							</a>
							<div className="text-gray-400 flex flex-col space-y-2 font-medium">
								<a href="">News</a>
								<a href="">Careers</a>
								<a href="">Investors</a>
								<a href="">Purpose</a>
								<a href="">Sustainability</a>
							</div>
						</div>
					</div>
					<div className="flex text-gray-400 space-x-2">
						<a href="#">
							<AiFillTwitterCircle className="text-4xl" />
						</a>
						<a href="">
							<FaFacebook className="text-4xl" />
						</a>
						<a href="">
							<AiFillYoutube className="text-4xl" />
						</a>
						<a href="">
							<RiInstagramFill className="text-4xl" />
						</a>
					</div>
				</div>
				<div></div>
			</div>
		</footer>
	);
}
