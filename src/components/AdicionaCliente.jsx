import React from 'react';
import { Formik, Field, useField } from 'formik';

const Campo = props => {
  const [field, meta] = useField(props)

  return (
    <>
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
    </>
  )
}


const AdicionaCliente = () => {

  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={{
          nome: '',
          email: '',
          nascimento: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.nome) {
            errors.nome = 'O nome é obrigatório.';
          }
          if (!values.email) {
            errors.email = 'O email é obrigatório!';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'O email é inválido.'
          }
          if (!values.nascimento) {
            errors.nascimento = 'A data de nascimento é obrigatória.';
          }

          return errors;
        }}
        onSubmit={(values) => { alert(JSON.stringify(values)) }}
      >
        {props => (
          <form noValidate onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <Campo type="text" id="nome" name="nome" />
              
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Campo type="text" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Data de Nascimento</label>
              <Campo type="text" id="nascimento" name="nascimento" />
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;
