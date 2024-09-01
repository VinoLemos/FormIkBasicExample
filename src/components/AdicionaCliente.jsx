import React from 'react';
import { Formik, useField } from 'formik';
import * as yup from 'yup';

const Campo = props => {
  const [field, meta] = useField(props)

  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...field}
        {...meta}
        className={meta.error && meta.touched ? 'is-invalid' : ''}
      />
      {meta.error && meta.touched &&
        <div className="invalid-feedback">
          {meta.error}
        </div>
      }
    </div>
  )
}


const AdicionaCliente = () => {

  const validation = yup.object({
    nome: yup.string()
      .required('O nome é obrigatório.')
      .min(10, 'O nome deve ter no mínimo 10 caracteres.')
      .max(30, 'O nome deve ter no máximo 30 caracteres.'),
    email: yup.string()
      .required('O email é obrigatório.')
      .email('O email é inválido.'),
    nascimento: yup.date()
      .required('A data de nascimento é obrigatória.')
      .max(new Date(), 'Você não pode ter nascido no futuro...'),
  });

  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={{
          nome: '',
          email: '',
          nascimento: ''
        }}
        validationSchema={validation}
        onSubmit={(values) => { alert(JSON.stringify(values)) }}
      >
        {props => (
          <form noValidate onSubmit={props.handleSubmit}>
            <Campo type="text" id="nome" name="nome" label="Nome" />
            <Campo type="text" id="email" name="email" label="Email" />
            <Campo type="text" id="nascimento" name="nascimento" label="Data de Nascimento" />
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;
