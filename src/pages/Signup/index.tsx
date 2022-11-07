import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Signup = () => {
  return (
    <div className="w-full h-screen bg-[#f3f5f7]">
      <div className="max-w-[600px] m-auto pt-20 ">
        <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
          <Form.Item name={['user', 'Id']} label="Id">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'Password']} label="Password">
            <Input.Password />
          </Form.Item>
          <Form.Item name={['user', 'name']} label="Name">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Signup
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
