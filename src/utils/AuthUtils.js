import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const useAuth = () => {

const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('token', user.accessToken);
      const token = localStorage.getItem('token');
      if(token){
        navigate('/home')
      }
      console.log(user);

    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        localStorage.setItem('token', user.accessToken);
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
        console.log(user);
    } catch (error) {
        console.error(error);
    }
};

  const signOut = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('token');
      console.log('User signed out successfully');
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const isAuthenticated = () => {
    const user = auth.currentUser
    return !!user;
  };

  return { signInWithGoogle, signOut, isAuthenticated };
};

export default useAuth;
