import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SHForm from "../components/form/SHForm";
import SHInput from "../components/form/SHInput";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  // const defaultValues = {
  //   userName: "SSs",
  //   password: "12345",
  // };
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Loading......");
    try {
      const userInfo = {
        userName: data.userName,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.data.token);
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.token }));
      toast.success("Logged in success", { id: toastId, duration: 2000 });
      Navigate("/");
    } catch (error) {
      toast.error("Somthing went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle">
      <div className="mt-20">
        <h2 className="text-4xl text-center font-semibold mb-5">
          Please Login!
        </h2>
        <SHForm onSubmit={onSubmit}>
          <SHInput type="text" name="userName" label="User Name" />
          <SHInput type="text" name="password" label="Password" />
          <Button
            htmlType="submit"
            className="bg-[#00abf0] px-5  font-semibold hover:bg-[#081b29] hover:text-white"
          >
            Login
          </Button>
          <p>
            Have you an account?{" "}
            <Link className="text-blue-600" to="/register">
              Register
            </Link>
          </p>
        </SHForm>
      </div>
    </Row>
  );
};

export default Login;
