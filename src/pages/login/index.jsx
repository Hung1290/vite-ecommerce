import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, message, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/api';


const LoginPage = () => {
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const { username, password } = values
        setIsSubmit(true)
        const res = await login(username, password)
        setIsSubmit(false)
        if (res?.data) {
            message.success("Đăng nhập tài khoản thành công!")
            navigate('/')
        }
        else {
            notification.error({
                message: "Có lỗi xảy ra",
                description: res.message && Array.isArray(res.message) ? res.message[0] : res.message
            })
        }
    };

    return (
        <div className='' style={{ padding: '50px' }}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, margin: "0 auto" }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={isSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default LoginPage;