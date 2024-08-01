import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!user && !password) {
            alert("Você precisa preencher todos os campos!");
        } 
        else if (user !== "admin" || password !== "umasenhamuitoforte") {
            alert("Usuário ou senha incorreto!");
        }
        else {
          navigate('/profile');
        }
    }

    return (
        <div id='form'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                placeholder='Digite seu nome de usuário'
                value={user} 
                onChange={(e) => setUser(e.target.value)} />
            </div>
            <div>
              <input 
                type="password" 
                placeholder='Digite sua senha'
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      );
}

export default Login