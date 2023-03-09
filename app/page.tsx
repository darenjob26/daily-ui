import Link from "next/link";

export default function Home() {
	return (
		<main className="font-sans h-screen text-white bg-[#111] flex items-center justify-center">
			<div className="text-center flex flex-col">
				<Link
					className="relative inline-block m-5 text-xl font-semibold uppercase tracking-[5px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:ease-in-out after:duration-300 hover:after:w-full"
					href={"/qr-code"}
				>
					QR Code
				</Link>
				<a
					className="relative inline-block m-5 text-xl font-semibold uppercase tracking-[5px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:ease-in-out after:duration-300 hover:after:w-full"
					href="#"
				>
					...
				</a>
			</div>
		</main>
	);
}
