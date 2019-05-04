// import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
// import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
// import {
//   createUser,
//   startLoadingUser,
// } from '../../../../store/actions/authActions'

// import ComponentMessage from '../../../../objects/ComponentMessage'

// import { Button } from '../../../../objects/Button'
// import Input from '../../../../objects/Input'
// import FieldMessage from '../../../../objects/FieldMessage'

// const initialValues = {
//   email: '',
//   password: '',
//   firstName: '',
//   lastName: '',
// }

// class CreateUser extends Component {
//   state = initialValues

//   getFormValidation = () => ({
//     firstName: Yup.string().required('Você precisa digitar seu primeiro nome.'),
//     lastName: Yup.string().required('É necessário informar seu sobrenome.'),
//     email: Yup.string()
//       .email('Epa, parece que o email que você digitou não é válido.')
//       .required('Você precisa digitar um e-mail :('),
//     password: Yup.string().required('Digite uma senha.'),
//   })

//   validation = () => Yup.object().shape(this.getFormValidation())

//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value,
//     })
//   }

//   handleSubmit = (values, { resetForm }) => {
//     this.setState(values)
//     this.props.startLoadingUser()
//     this.props.createUser(this.state)
//     resetForm()
//   }

//   render() {
//     const { createUserMsg, loadingUser } = this.props
//     return (
//       <Formik
//         initialValues={initialValues}
//         validationSchema={this.validation()}
//         onSubmit={(values, actions) => {
//           this.handleSubmit(values, actions)
//         }}
//         render={({
//           values,
//           touched,
//           errors,
//           dirty,
//           isSubmitting,
//           handleSubmit,
//           handleChange,
//           handleBlur,
//           handleReset,
//         }) => (
//           <Fragment>
//             {JSON.stringify(errors)}
//             <Form>
//               <h1>Criar novo Usuário</h1>
//               <Input
//                 id="firstName"
//                 placeholder="Digite o primeiro nome"
//                 type="text"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={
//                   errors.firstName && touched.firstName ? '-error' : ''
//                 }
//               />
//               <FieldMessage
//                 error={errors.firstName}
//                 touched={touched.firstName}
//                 message={errors.firstName}
//               />
//               <Input
//                 id="lastName"
//                 placeholder="Digite o sobrenome"
//                 type="text"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={errors.lastName && touched.lastName ? '-error' : ''}
//               />
//               <FieldMessage
//                 error={errors.lastName}
//                 touched={touched.lastName}
//                 message={errors.lastName}
//               />
//               <Input
//                 id="email"
//                 placeholder="Digite o email"
//                 type="text"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={errors.email && touched.email ? '-error' : ''}
//               />
//               <FieldMessage
//                 error={errors.email}
//                 touched={touched.email}
//                 message={errors.email}
//               />
//               <Input
//                 id="password"
//                 placeholder="Digite a senha"
//                 type="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={errors.password && touched.password ? '-error' : ''}
//               />
//               <FieldMessage
//                 error={errors.password}
//                 touched={touched.password}
//                 message={errors.password}
//               />
//               <Button onClick={handleSubmit}>Cadastrar</Button>
//               <ComponentMessage>
//                 {loadingUser ? <h1>Carregando...</h1> : null}
//               </ComponentMessage>
//               <ComponentMessage>
//                 {createUserMsg ? <p>{createUserMsg}</p> : null}
//               </ComponentMessage>
//             </Form>
//           </Fragment>
//         )}
//       />
//     )
//   }
// }

// const mapStateToProps = state => ({
//   createUserMsg: state.auth.createUserMsg,
//   loadingUser: state.auth.loadingUser,
// })

// const mapDispatchToProps = dispatch => ({
//   createUser: creds => dispatch(createUser(creds)),
//   startLoadingUser: () => dispatch(startLoadingUser()),
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CreateUser)
