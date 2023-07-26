import Image from "next/image"
import HarmonyLogo from "../images/logo.svg"

export default function Home() {
	return (
		<div className="w-full mt-40 flex flex-col items-center">
			<Image src={HarmonyLogo} />
			<p className="text-4xl">Control your mind, control yourself!</p>
		</div>
	)
}
