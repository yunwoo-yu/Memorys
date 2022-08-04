import { useCallback } from "react";
import { useDispatch } from "react-redux";
import SignUpForm from "../../components/SignUp/SignUpForm";
import { userSignUp } from "../../Reducer/Slice/userSlice";

const SignUpFormContainer = () => {
  const dispatch = useDispatch();

  const signUp = useCallback(
    (data) => {
      dispatch(userSignUp(data));
      console.log(data);
    },
    [dispatch]
  );

  return <SignUpForm signUp={signUp} />;
};
export default SignUpFormContainer;
