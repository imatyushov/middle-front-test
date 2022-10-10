import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";
import {rules} from "../utils /rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
    const {isLoading, error} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()

    const submit = () => {
        login(username, password)
    }

    return (
       <Form
           onFinish={submit}
       >
           {error && <div style={{color: 'red'}}>
               {error}
           </div>}
           <FormItem
               label='Имя пользователя'
               name='username'
               rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
           >
               <Input
                   value={username}
                   onChange={event => setUsername(event.target.value)}
               />
           </FormItem>
           <FormItem
               label='Пароль'
               name='password'
               rules={[rules.required('Пожалуйста, введите пароль!')]}
           >
               <Input.Password
                   value={password}
                   onChange={event => setPassword(event.target.value)}
               />
           </FormItem>
           <Form.Item>
               <Button type="primary" htmlType="submit" loading={isLoading}>
                   Войти
               </Button>
           </Form.Item>
       </Form>
    );
};

export default LoginForm;