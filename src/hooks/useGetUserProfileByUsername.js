// import { useEffect, useState } from "react";
// import useShowToast from "./useShowToast";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { firestore } from "../firebase/firebase";
// import useUserProfileStore from "../store/userProffilestore";

// const useGetUserProfileByUsername = (username) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const showToast = useShowToast();
//   const { setUserProfile } = useUserProfileStore();

//   useEffect(() => {
//     const getUserProfile = async () => {
//       setIsLoading(true);
//       try {
//         const q = query(collection(firestore, "users"), where("username", "==", username));
//         const querySnapshot = await getDocs(q);

//         if (querySnapshot.empty) {
//           setUserProfile(null); // Ensure userProfile is set to null if not found
//         } else {
//           let userDoc;
//           querySnapshot.forEach((doc) => {
//             userDoc = doc.data();
//           });
//           setUserProfile(userDoc);
//         }
//       } catch (error) {
//         showToast("Error", error.message, "error");
//       } finally {
//         setIsLoading(false); // Ensure isLoading is set to false after fetching data
//       }
//     };

//     getUserProfile();
//   }, [username, setUserProfile, showToast]);

//   return { isLoading, userProfile: useUserProfileStore((state) => state.userProfile) };
// };

// export default useGetUserProfileByUsername;
