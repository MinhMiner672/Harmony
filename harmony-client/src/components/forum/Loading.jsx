export default function ForumLoadingUI() {
	return (
		<>
			<main className="mt-32 mb-44 flex flex-col gap-5 items-center">
				{/* Button */}
				<div className="bg-slate-300 rounded-full w-[18%] h-12 animate-pulse"></div>

				{/* Filter */}
				<main className="flex gap-3 bg-gray-200 px-20 py-3 rounded-md">
					<div className="h-7 w-20 rounded-full bg-slate-300"></div>
					<div className="h-7 w-20 rounded-full bg-slate-300"></div>
					<div className="h-7 w-20 rounded-full bg-slate-300"></div>
					<div className="h-7 w-20 rounded-full bg-slate-300"></div>
				</main>

				{/* Posts */}
				<article className="w-[45%] flex flex-col gap-3 border border-gray-300 bg-gray-50 rounded-2xl shadow-lg p-5 animate-pulse">
					<section className="flex gap-1">
						<div className="h-6 px-4 py-2 w-20 bg-slate-300 rounded-full"></div>
						<div className="h-6 px-4 py-2 w-20 bg-slate-300 rounded-full"></div>
					</section>

					<section className="flex items-center gap-3">
						<div className="w-14 h-14 rounded-xl bg-slate-300"></div>

						<div className="flex flex-col gap-3">
							<h1 className="h-5 w-32 rounded-full bg-slate-300"></h1>
							<p className="h-4 w-52 bg-slate-300 rounded-full"></p>
						</div>
					</section>

					<main className="flex flex-col gap-2">
						<h1 className="rounded-full bg-slate-300 h-7 w-20"></h1>
						<div className="flex flex-col gap-1">
							<p className="rounded-full bg-slate-300 h-4 w-60"></p>
							<p className="rounded-full bg-slate-300 h-4 w-48"></p>
						</div>
					</main>

					<section className="w-full flex gap-2 justify-end">
						<div className="rounded-full h-6 w-6 bg-slate-300"></div>
						<div className="rounded-full h-6 w-6 bg-slate-300"></div>
					</section>
					<hr className="w-full h-[0.2rem] bg-gray-200" />
					<section className="w-full flex justify-around">
						<div className="rounded-full bg-slate-300 w-48 h-8"></div>
						<div className="rounded-full bg-slate-300 w-48 h-8"></div>
					</section>
				</article>
			</main>
		</>
	)
}
