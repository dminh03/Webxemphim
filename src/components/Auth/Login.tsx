import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { useNavigate } from 'react-router-dom';
import "../../assets/styles/Login.css";
import 'antd/es/form/style';
import 'antd/es/input/style';
import 'antd/es/button/style';
import 'antd/es/checkbox/style';
import 'antd/es/message/style';
interface LoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const navigate = useNavigate(); 

  const onFinish = (values: LoginFormValues) => {
    console.log('Success:', values);
    message.success('Login successful!');
    localStorage.setItem('username', values.username);
    navigate('/');
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<LoginFormValues>) => {
    console.log('Failed:', errorInfo);
    message.error('Login failed! Please check your input.');
  };

  return (
    <div
      className="login-container bg-cover bg-center flex items-center justify-center min-h-screen text-white"
      style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/flat-design-movie-theater-background_23-2150998489.jpg?semt=ais_hybrid)' }}
    >
      <div className="login-box p-0 rounded-lg max-w-md w-full">
        <h2 className="text-center text-3xl font-semibold mb-6">Thông tin đăng nhập</h2>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="text-white"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<i className="fas fa-user" />} placeholder="User name" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<i className="fas fa-lock" />} placeholder="Password" />
          </Form.Item>

          <div className="flex justify-between items-center mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-white">Remember me</Checkbox>
            </Form.Item>
            <a href="#" className="text-white">
              Forgot Password?
            </a>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-pink-500 hover:bg-pink-600">
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="text-center my-4 text-lg font-semibold">or</div>

          <Form.Item>
            <Button 
              type="primary" 
              className="w-full bg-pink-500 hover:bg-pink-600" 
              onClick={() => navigate('/register')}
            >
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
