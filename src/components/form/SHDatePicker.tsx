import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  label: string;
};

const SHDatePicker = ({ name, label }: TInputProps) => {
  return (
    <div className="mb-5 font-medium">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: "100%" }} />
            {error && <small className="text-red-600"> {error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default SHDatePicker;
