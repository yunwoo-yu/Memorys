import { useCallback } from "react";
import { useDispatch } from "react-redux";
import SignUpForm from "../../components/SignUp/SignUpForm";
import { userSignUpAndLogin } from "../../Reducer/Slice/userSlice";

const SignUpFormContainer = () => {
  const dispatch = useDispatch();

  const signUp = useCallback(
    (data) => {
      dispatch(userSignUpAndLogin(data));
    },
    [dispatch]
  );

  return <SignUpForm signUp={signUp} />;
};
export default SignUpFormContainer;
