import React from 'react';
import { Button, Divider, Form, Input } from 'antd';


const RegisterPage = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className='register-page' style={{ padding: '50px' }}>

            <h2 style={{ textAlign: 'center' }}>Đăng ký người dùng mới</h2>
            <Divider />
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, margin: "100px auto 0" }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your Full Name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your Phone!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default RegisterPage;