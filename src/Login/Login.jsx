import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="container">
        <form>
            <h1>Acesse o sistema</h1>
            <div>
                <input type="email" placeholder='Digite seu email...' />
            </div>
            <div>
                <input type="password" placeholder='Digite sua senha...' />
            </div>
            <button>Enviar</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
