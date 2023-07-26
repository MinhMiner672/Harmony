import Link from "next/link"

export default function NavLink({ _href, children }) {
	return (
		<Link href={_href} className=" hover:underline  ">
			{children}
		</Link>
	)
}
