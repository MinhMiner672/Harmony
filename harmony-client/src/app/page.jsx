import Image from "next/image"
import HarmonyLogo from "../images/logo.png"

export default function Home() {
	return (
		<div className="w-full mt-36 flex flex-col items-center">
			<Image src={HarmonyLogo} />
			<p className="text-4xl">
				A website specialized in mental health support
			</p>
		</div>
	)
}
