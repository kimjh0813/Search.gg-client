import { Button, Checkbox, Form, Input } from 'antd';

const Login = () => {
  return (
    <div className="w-full h-screen bg-[#f3f5f7]">
      <div className="max-w-[600px] m-auto pt-20 ">
        <Form name="basic" initialValues={{ remember: true }} autoComplete="off">
          <div className="my-2">username</div>
          <Input />
          <div className="my-2">password</div>
          <Input.Password />
          <Checkbox>Remember Id</Checkbox>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
