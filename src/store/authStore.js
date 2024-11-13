import { create } from "zustand";

const useAuthStore = create((set) => {
    // Retrieve user info from localStorage
    const storedUser = localStorage.getItem("user-info");
    
    // Safely parse storedUser or default to null if parsing fails
    let user = null;
    if (storedUser) {
        try {
            user = JSON.parse(storedUser);
        } catch (error) {
            console.error("Failed to parse user info from localStorage:", error);
            user = null;
        }
    }

    return {
        user,
        login: (user) => {
            set({ user });
            localStorage.setItem("user-info", JSON.stringify(user));
        },
        logout: () => {
            set({ user: null });
            localStorage.removeItem("user-info");
        },
        setUser: (user) => {
            set({ user });
            localStorage.setItem("user-info", JSON.stringify(user));
        },
    };
});

export default useAuthStore;



// import { create } from "zustand";

// const useAuthStore = create((set) => ({
// 	user: JSON.parse(localStorage.getItem("user-info")),
// 	login: (user) => set({ user }),
// 	logout: () => set({ user: null }),
// 	setUser: (user) => set({ user }),
// }));

// export default useAuthStore;