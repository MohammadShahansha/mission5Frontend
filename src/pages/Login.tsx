import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SHForm from "../components/form/SHForm";
import SHInput from "../components/form/SHInput";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  const defaultValues = {
    userName: "SSs",
    password: "12345",
  };
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
      <SHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <SHInput type="text" name="userName" label="User Name" />
        <SHInput type="text" name="password" label="Password" />
        <Button htmlType="submit" className="font-medium">
          Login
        </Button>
      </SHForm>
    </Row>
  );
};

export default Login;
