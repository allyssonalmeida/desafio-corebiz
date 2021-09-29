import React from 'react'
import axios from 'axios'
import { Wrapper, Alert, Message } from './Style';

const Newsletter = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [vNome, setVnome] = React.useState(true);
  const [vEmail, setVemail] = React.useState(true);
  const [envio, setEnvio] = React.useState(false);

  function validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setVemail(re.test(email));
  }

  async function handleSubmit(e){
    e.preventDefault();
    validateEmail();

    if(nome && email){
      console.log("PEI")
      setVnome(true)
      const lead = {
        name: nome,
        email: email
      }
      let res = await axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', lead)
      if(res.status === 200){
        setEnvio(true)
      }
    }else{
      setVnome(false)
    }

  }

  return (
    <section className="grid">
      <Wrapper>
        {envio ? 
          <Message>
            <h3>Seu e-mail foi cadastrado com sucesso</h3>
            <p>A partir de agora você receberá as novidades e ofertas exclusivas</p>
            <button onClick={()=>{setEnvio(false)}}> Cadastrar novo e-mail </button>
          </Message>
        : 
        <>
          <h2>Participe de nossa news com promoções e novidades!</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="nome" value={nome} 
                      onChange={(e)=>{ setNome(e.target.value) }} 
                      placeholder="Digite seu nome"
                      className={vNome ? '':'error'}
              />
              {vNome ? '': <Alert>Preencha com seu nome completo</Alert>}
            </div>
            <div className="form-group">
              <input type="email" id="email" 
                      value={email} onChange={(e)=>{ setEmail(e.target.value) }}     
                      placeholder="Digite seu email" 
                      className={vEmail ? '':'error'}
              />
              {vEmail ? '': <Alert>Preencha com um e-mail válido</Alert>}
            </div>
            <button>Eu quero!</button>
          </form>
        </>
        }
      </Wrapper>
    </section>
  )
}

export default Newsletter
