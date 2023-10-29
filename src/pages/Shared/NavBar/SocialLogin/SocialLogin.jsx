import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline"
        >
          <span className="text-center">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
