import { Button, Form, Input } from 'antd';
import { useState } from 'react';

interface SignUpInfo {
  name: string;
  id: string;
  password: string;
}

const SignUp = () => {
  const [SignUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    name: '',
    id: '',
    password: '',
  });

  const handleValueChange = ({ target: { value, name } }: any) => {
    setSignUpInfo((prev) => ({ ...prev, [name]: value }));
  };

  function Submit() {
    console.log(SignUpInfo);
  }

  return (
    <div className="w-full h-screen bg-[#f3f5f7]">
      <div className="max-w-[600px] m-auto pt-20 ">
        <div>Id</div>
        <Input name="id" type="text" onChange={handleValueChange} className="mb-8" />
        <div>Password</div>
        <Input.Password name="password" onChange={handleValueChange} className="mb-8" />
        <div>Name</div>
        <Input name="name" type="text" onChange={handleValueChange} className="mb-8" />
        <div>Email</div>
        <Input name="email" type="email" onChange={handleValueChange} className="mb-8" />
        <Button type="primary" onClick={Submit}>
          SignUp
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
