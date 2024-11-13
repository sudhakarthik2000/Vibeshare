import { Flex, Image, Text } from "@chakra-ui/react"
import { auth, firestore } from "../../firebase/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { doc, setDoc } from "firebase/firestore";

const GoogleAuth = () => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const showToast = useShowToast()
  const loginUser = useAuthStore((state)=>state.login)

const handleGoogleAuth = async () => {
  try{

    const newUser = await signInWithGoogle()
    if(!newUser && error){
      showToast('Error',error.message,'error')
      return
    }
    if(newUser){
      const userDoc = {
        uid: newUser.user.uid,
        email: newUser.user.email,
        username: newUser.user.email.split("@")[0],
        fullname: newUser.user.displayName,
        bio: "",
        profilePicURL: newUser.user.photoURL,
        followers: [],
        following: [],
        posts: [],
        createdAt: Date.now(),
      };

      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      localStorage.setItem("user-info", JSON.stringify(userDoc));
      loginUser(userDoc);
    }

  }
  catch(error){
    showToast("Error" , error.message,'error')

  }
}

  return (
    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} onClick={handleGoogleAuth}>
                <Image src='/glogo.png' width={5} alt='Google logo'/>
                <Text mx={2} color={"white"}/>Login With Google
                </Flex>
  )
}

export default GoogleAuth