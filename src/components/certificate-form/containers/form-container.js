import React, {useState, useEffect} from 'react';
import {Form} from './../components/form';

export const FormContainer = () => {
    const [user, setUser] = useState('');
    const handleChangeUser = (e) => setUser(e.target.value);

    const [status, setStatus] = useState('init');

    return (
        <Form
            user={user}
            onChangeUser={handleChangeUser}
            status={status}
            setStatus={setStatus}
        />
    );
};