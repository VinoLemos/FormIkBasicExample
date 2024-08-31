import React from 'react';
import { Formik, Field } from 'formik';


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
              <Field
                id="nome"
                name="nome"
                type="text"
                // As validações abaixo são nativas do componente 'Field', do FormIk.
                // value={props.values.email}
                // onChange={props.handleChange}
                // onBlur={props.handleBlur}
                className={props.errors.nome && props.touched.nome ? 'is-invalid' : ''}
              />
              {props.touched.nome && props.errors.nome &&
                <div className="invalid-feedback">
                  {props.errors.nome}
                </div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className={props.errors.email && props.touched.email ? 'is-invalid' : ''}
              />
              {props.touched.email && props.errors.email &&
                <div className="invalid-feedback">
                  {props.errors.email}
                </div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="date">Data de Nascimento</label>
              <Field
                id="nascimento"
                name="nascimento"
                type="date"
                className={props.errors.nascimento && props.touched.nascimento ? 'is-invalid' : ''}
              />
              {props.touched.nascimento && props.errors.nascimento &&
                <div className="invalid-feedback">
                  {props.errors.nascimento}
                </div>
              }
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;
