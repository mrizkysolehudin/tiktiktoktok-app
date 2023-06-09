import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

	if (isSSR) return null;

	return (
		<GoogleOAuthProvider
			clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_CLIENT_ID}`}>
			<div className="m-auto h-[100vh] overflow-hidden xl:w-[1200px]">
				<Navbar />

				<div className="mt-16 flex gap-4 xl:gap-20 ">
					<div className="h-[92vh] overflow-hidden hover:overflow-auto">
						<Sidebar />
					</div>
					<div className="mt-4 flex h-[97vh] flex-1 flex-col gap-10 overflow-auto scrollbar-hide">
						<Component {...pageProps} />
					</div>
				</div>
			</div>
		</GoogleOAuthProvider>
	);
}
