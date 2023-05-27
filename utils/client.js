import santiyClient from "@sanity/client";

const client = santiyClient({
	projectId: "k3lpsyu4",
	dataset: "production",
	apiVersion: "2022-03-10",
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default client;
