import {Fragment, useState} from 'react'
import {Paper,Box, Dialog, DialogTitle, TextField, Button, CircularProgress} from '@mui/material'
import Image from 'next/image';
import {useAuth} from '../contexts/AuthContext'
import styles from '../styles/login.module.css';

import MiImagen from 'src/public/assets/img/NisjasdevLetraNegra.jpg';

const textFieldSx = { mx: 3, // Márgenes horizontales
my: 1,
'& .MuiInputLabel-root': {
  fontSize: '18px',
  color: 'orange', // Tamaño de la fuente de la etiqueta
},
'& .MuiInputBase-input': {
  fontSize: '18px',
   // Tamaño de la fuente del texto de entrada
},
'& .MuiOutlinedInput-notchedOutline': {
  borderColor: 'orange', // Cambia el color del borde inferior del TextField
  borderWidth: '2px',
  borderColor: 'orange', // Grosor del borde del TextField
},
'&:hover .MuiOutlinedInput-notchedOutline': {
  borderColor: 'orange', // Cambia el color del borde inferior del TextField al pasar el mouse sobre él
  borderWidth: '2px', 
   // Grosor del borde del TextField al pasar el mouse sobre él
},
'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
  borderColor: 'orange', // Cambia el color del borde inferior del TextField cuando está enfocado
  borderWidth: '2px', // Grosor del borde del TextField cuando está enfocado
},
}

export default function AuthModal({open, close, isRegisterMode, toggleRegister}) {
  const {login, register} = useAuth()

  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  }

  const clickSubmit = async () => {
    setLoading(true)
    setError('')

    try {
      isRegisterMode ? await register(formData) : await login(formData)
      close()
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }

  const disabledLoginButton = !formData['username'] || !formData['password']
  const disabledRegisterButton = !formData['username'] || !formData['password']

  return (
    <Dialog open={open} onClose={close}>
     <Box  className={styles.content}>
      <Image src={MiImagen} className={styles.img}/>
      {isRegisterMode ? (
        <RegisterForm formData={formData} handleChange={handleChange} />
      ) : (
        <LoginForm formData={formData} handleChange={handleChange} />
      )}

      {error && <span className='error'>{error}</span>}

      {loading ? (
        <center>
          <CircularProgress className={styles.circle} color='inherit' style={{ color: '#F6922A' }}/>
        </center>
      ) : (
        <div style={{ textAlign: 'center' }}>
        <Button  className={disabledRegisterButton ?  styles.disabledButton: styles.activeButton} 
          onClick={clickSubmit}
          disabled={isRegisterMode ? disabledRegisterButton : disabledLoginButton}>
          {isRegisterMode ? 'Registrar' : 'Login'}
        </Button>
       </div>
       
      )}

      <Button  className={styles.btnAcount}onClick={toggleRegister}>
        {isRegisterMode ? 'Ya tengo cuenta' : "No tengo cuenta"}
       
      </Button>
   
      </Box>
    </Dialog>
  )
}

function LoginForm({formData, handleChange}) {
  return (
    <Fragment className={styles.fragment}>
      <DialogTitle>Acceda a su cuenta</DialogTitle>

      <TextField
        label='Email'
        name='username'
        type='email'
        value={formData['username'] || ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
      <TextField 
        label='Password'
        name='password'
        type='password'
        value={formData['password'] || ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
    </Fragment>
  )
}

function RegisterForm({formData, handleChange}) {
  return (
    <Fragment className={styles.fragment}>
      <DialogTitle>Crear nueva cuenta</DialogTitle>

      <TextField
        label='Email'
        name='username'
        type='email'
        value={formData['username'] || ''}
        onChange={handleChange}
        variant='filled'
         sx={textFieldSx}
        required 
       
      />
      <TextField
        label='Password'
        name='password'
        type='password'
        value={formData['password'] || ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      
      />
    </Fragment>
  )
}
