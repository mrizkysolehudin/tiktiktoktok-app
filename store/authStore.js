import { BASE_URL } from "@/utils";
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialStateAuth = (set) => ({
	userProfile: null,
	allUsers: [],
	addUser: (user) => set({ userProfile: user }),
	removeUser: () => set({ userProfile: null }),

	fetchAllUsers: async () => {
		const res = await axios.get(`${BASE_URL}/api/users`);

		set({ allUsers: res.data });
	},
});

const useAuthStore = create(
	persist(initialStateAuth, {
		name: "auth",
	})
);

export default useAuthStore;
