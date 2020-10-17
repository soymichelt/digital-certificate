import React from 'react';
import './form.styles.css';
import UnanImage from './../../../assets/unan.png';

export const Form = (props) => {
    const {
        user,
        onChangeUser,
    } = props;
    return (
        <section className="certificate-form">
            <section className="logo">
                <img
                    alt="UNAN, FAREM - Chontales"
                    src={UnanImage}
                />
            </section>
            <input
                placeholder="Usuario"
                value={user}
                onChange={onChangeUser}
            />
            <button>
                Obtener Certificado
            </button>
        </section>
    );
};