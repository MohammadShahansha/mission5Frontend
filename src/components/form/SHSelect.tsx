import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
};

const SHSelect = ({ label, name, options }: TSHSelectProps) => {
  return (
    <div className="font-medium">
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Select style={{ width: "100%" }} {...field} options={options} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default SHSelect;
