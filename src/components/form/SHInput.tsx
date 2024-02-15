import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string | number;
  name: string;
  label: string;
};

const SHInput = ({ type, name, label }: TInputProps) => {
  return (
    <div className="mb-5 font-medium">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
            {error && <small className="text-red-600"> {error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default SHInput;
