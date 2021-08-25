import nikeLogo from "public/images/snkrs.svg";
import Image from "next/image";

export default function LoadingComponent() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<Image src={nikeLogo} width={120} height={100} />
		</div>
	);
}
