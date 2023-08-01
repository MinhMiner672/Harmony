"use client"

import Image from "next/image"
import Link from "next/link"

import { Be_Vietnam_Pro, Quicksand } from "next/font/google"
import { signIn, signOut } from "next-auth/react"
import { useRef, useEffect } from "react"

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"] })
const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["600"] })

export default function UserAvt({ nextAuthSession }) {
	const handleSignIn = () => signIn("google")
	const handleSignOut = () => signOut()

	const outsideClickRef = useRef(null)
	detectOutsideClick(outsideClickRef)

	return (
		<div>
			{/* Signed in (Show Avatar) */}
			{nextAuthSession?.user && (
				<>
					<Image
						src={nextAuthSession.user.image}
						width={40}
						height={40}
						className="rounded-full mx-7 hover:cursor-pointer"
						onClick={showAccountMenu}
						alt='user avatar'
					/>
					<section
						ref={outsideClickRef}
						className={
							"account-menu hidden border border-gray-300  absolute top-[90%] right-[7%] bg-gray-50 rounded-md shadow-lg " +
							quicksand.className
						}
					>
						<Link
							href="#"
							className="hover:bg-gray-200 px-3 py-1 flex items-center gap-1"
						>
							<Image
								src="/images/NavBar/pencil.png"
								width={20}
								height={20}
								alt='pencil'
							/>
							Diary
						</Link>
						<button
							onClick={handleSignOut}
							className="hover:bg-gray-200 px-3 py-1 flex items-center gap-1"
						>
							<Image
								src="/images/NavBar/logout.png"
								width={20}
								height={20}
								alt='logout'
							/>
							Sign out
						</button>
					</section>
				</>
			)}

			{/* Not signed in (Show sign In Button) */}
			{!nextAuthSession && (
				<button
					onClick={handleSignIn}
					className={
						"border-2 text-lime-800 border-lime-800 rounded-full px-5 py-1 hover:text-white hover:bg-lime-800 transition-all " +
						vietnam_pro.className
					}
				>
					Sign In
				</button>
			)}
		</div>
	)
}

function detectOutsideClick(accountMenuRef) {
	useEffect(() => {
	  /**
	   * Alert if clicked on outside of element
	   */
	  function handleClickOutside(event) {
		if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
			const invisibleClassName = accountMenuRef.current.className.replace('block', 'hidden') 
			accountMenuRef.current.className = invisibleClassName
		}
	  }
	  // Bind the event listener
	  document.addEventListener("mousedown", handleClickOutside);
	  return () => {
		// Unbind the event listener on clean up
		document.removeEventListener("mousedown", handleClickOutside);
	  };
	}, [accountMenuRef]);
}

// When user clicks on their avatar
function showAccountMenu() {
	const accountMenu = document.querySelector('.account-menu')
	const visibleClass = accountMenu.className.replace('hidden', 'block')	
	accountMenu.className = visibleClass
}