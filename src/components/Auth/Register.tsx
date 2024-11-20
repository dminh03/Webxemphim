import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { useNavigate } from 'react-router-dom';
import "../../assets/styles/Login.css";
import 'antd/es/form/style';
import 'antd/es/input/style';
import 'antd/es/button/style';
import 'antd/es/message/style';

interface RegisterFormValues {
  username: string;
  email: string;
  phone: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: RegisterFormValues) => {
    console.log('Success:', values);
    message.success('Registration successful!');
    navigate('/login');
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<RegisterFormValues>) => {
    console.log('Failed:', errorInfo);
    message.error('Registration failed! Please check your input.');
  };

  return (
    <div
      className="login-container bg-cover bg-center flex items-center justify-center min-h-screen text-white"
      style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/flat-design-movie-theater-background_23-2150998489.jpg?semt=ais_hybrid)' }}
    >
      <div className="login-box p-0 rounded-lg max-w-md w-full">
        <h2 className="text-center text-3xl font-semibold mb-6">Đăng Ký Tài Khoản</h2>

        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="text-white"
        >
          <Form.Item
            label="Họ và tên"
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập họ và tên của bạn!' }]}
          >
            <Input placeholder="Họ và tên" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: 'none' }} />
          </Form.Item>

          <Form.Item
            label="Địa chỉ Email"
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ email của bạn!' }]}
          >
            <Input placeholder="Địa chỉ Email" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: 'none' }} />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại của bạn!' }]}
          >
            <Input placeholder="Số điện thoại" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: 'none' }} />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
          >
            <Input.Password placeholder="Mật khẩu" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: 'none' }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-pink-500 hover:bg-pink-600">
              Đăng Ký
            </Button>
          </Form.Item>

          <div className="text-center my-4 text-lg font-semibold">or</div>

          <Form.Item>
            <Button 
              type="primary" 
              className="w-full bg-pink-500 hover:bg-pink-600" 
              onClick={() => navigate('/login')}
            >
              Đăng Nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
