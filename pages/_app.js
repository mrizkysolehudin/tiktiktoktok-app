import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<div className="m-auto h-[100vh] w-[1200px] overflow-hidden">
			<Navbar />

			<div className="mt-16 flex gap-20 ">
				<div className="h-[92vh] overflow-hidden hover:overflow-auto">
					<Sidebar />
				</div>
				<div className="mt-4 flex h-[97vh] flex-1 flex-col gap-10 overflow-auto scrollbar-hide">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}
