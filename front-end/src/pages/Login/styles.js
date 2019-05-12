import styled from 'styled-components'

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .login-logo {
    height: 250px;
    width: 250px;
    margin-top: -100px;
    margin-bottom: 40px;
  }
  .login-container {
    padding: 35px;
    background-color: var(--color-gray-dark);
    box-shadow: -15px 20px 50px 0 rgba(0, 0, 0, 0.2);
    max-width: 450px;
  }
  .ant-form-explain {
    color: var(--color-white) !important;
  }
  .has-error .ant-input {
    border-color: var(--color-green-dark) !important;
    border-width: 1px !important;
  }
  .ant-form-item-label {
    margin-bottom: 10px !important;
  }
  .ant-form-item-label label {
    color: var(--color-green) !important;
    font-size: 0.9rem;
  }
  .ant-row {
    margin-bottom: 20px !important;
  }
  .login-message {
    color: var(--color-white);
    text-align: center;
  }
`

export default StyledLogin
