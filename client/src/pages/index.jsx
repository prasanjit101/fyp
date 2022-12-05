import { Box, Typography, Backdrop, CircularProgress, Divider } from '@mui/material'
import React from 'react'
import logo from '../assets/tezu.png'
import useEth from '../contexts/EthContext/useEth'
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded'
import CustomButton from '../components/CustomButton'
import { useNavigate } from 'react-router-dom'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import '../App.css'

const Home = () => {
  const {
    state: { contract, accounts, role, loading },
    dispatch,
  } = useEth()
  const navigate = useNavigate()

  const registerDoctor = async () => {
    try {
      await contract.methods.addDoctor().send({ from: accounts[0] })
      dispatch({
        type: 'ADD_DOCTOR',
      })
    } catch (err) {
      console.error(err)
    }
  }

  const ActionSection = () => {
    if (!accounts) {
      return (
        <Typography variant='h5' color='white'>
          Open your MetaMask wallet to get connected, then refresh this page
        </Typography>
      )
    } else {
      if (role === 'unknown') {
        return (
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Box mb={2}>
              <CustomButton text='Doctor Register' handleClick={() => registerDoctor()}>
                <PersonAddAlt1RoundedIcon style={{ color: 'white' }} />
              </CustomButton>
            </Box>
            <Typography variant='h5' color='white'>
              If you are a patient, ask your doctor to register for you
            </Typography>
          </Box>
        )
      } else if (role === 'patient') {
        return (
          <CustomButton text='Patient Portal' handleClick={() => navigate('/patient')}>
            <LoginRoundedIcon style={{ color: 'white' }} />
          </CustomButton>
        )
      } else if (role === 'doctor') {
        return (
          <CustomButton text='Doctor Portal' handleClick={() => navigate('/doctor')}>
            <LoginRoundedIcon style={{ color: 'white' }} />
          </CustomButton>
        )
      }
    }
  }

  if (loading) {
    return (
      <Backdrop sx={{ color: '#000000', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    )
  } else {
    return (
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        width='100vw'
        height='100vh'
        id='background'
      >
        <Box
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
        </Box>
        <Box id='home-page-box' display='flex' flexDirection='column' justifyContent='center' alignItems='center' p={5}>
          <img src={logo} alt='logo' />
          <Box mt={2} mb={5}>
            <Typography variant='h4' color='black'>
              Implementation of cost efficient decentralized blockchain network for secure transfer and storage of patient medical record for osteoporosis
            </Typography>

          </Box>
          <ActionSection />
        </Box>
      </Box>
    )
  }
}

export default Home
