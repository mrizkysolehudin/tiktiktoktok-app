import NoResult from "@/components/NoResult";
import VideoCard from "@/components/VideoCard";
import { BASE_URL } from "@/utils";
import axios from "axios";

export default function Home({ videosPosted }) {
	return (
		<div className="mb-24  flex flex-col gap-y-6 divide-y-[1.5px] divide-slate-300">
			{videosPosted?.length ? (
				videosPosted.map((videoPosted, index) => (
					<VideoCard key={index} videoPosted={videoPosted} />
				))
			) : (
				<NoResult text="No Videos" />
			)}
		</div>
	);
}

export async function getServerSideProps({ query: { topic } }) {
	let res;
	if (topic) {
		res = await axios.get(`${BASE_URL}/api/popularTopics/${topic}`);
	} else {
		res = await axios.get(`${BASE_URL}/api/post`);
	}

	return {
		props: {
			videosPosted: res.data,
		},
	};
}
