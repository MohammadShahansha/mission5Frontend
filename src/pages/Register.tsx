import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import { toast } from "sonner";
import SHForm from "@/components/form/SHForm";
import SHInput from "@/components/form/SHInput";
import SHSelect from "@/components/form/SHSelect";
import { Link, useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "@/redux/features/register/registerApi";
const Register = () => {
  const [createRegister] = useRegistrationMutation();
  const navigate = useNavigate();
  const roleOptions = [
    {
      value: "admin",
      label: "admin",
    },
    {
      value: "buyer",
      label: "buyer",
    },
  ];
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const { userName, email, password, role } = data;

    const userInfo = {
      userName,
      email,
      password,
      role,
    };

    try {
      const toasId = toast.loading("loading......");
      const res = await createRegister(userInfo);
      toast.success("Registration successful", { id: toasId });
      console.log(res);
      navigate("/login");
    } catch (error) {
      toast.error("somthing wrong", { duration: 3000 });
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col span={6} xs={24} sm={18} md={6} className="mt-20">
        <h2 className="text-4xl text-center font-semibold mb-5">
          Please Register!
        </h2>
        <SHForm
          onSubmit={onSubmit}
          // resolver={zodResolver(shoesValidationSchema)}
        >
          <SHInput type="text" name="userName" label="UserName" />
          <SHInput type="text" name="email" label="Email" />
          <SHInput type="text" name="password" label="Password" />
          <SHSelect label="Role" name="role" options={roleOptions} />
          <Button
            htmlType="submit"
            className="bg-[#00abf0] px-5  font-semibold hover:bg-[#081b29] hover:text-white"
          >
            Submit
          </Button>
          <p>
            Already have an account?
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </p>
        </SHForm>
      </Col>
    </Row>
  );
};

export default Register;
