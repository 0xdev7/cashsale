import { useEffect, useState } from "react";
import Web3 from 'web3';
import { Box, Button, Typography } from '@material-ui/core'

const GetWeb3 = () => {
    const [web3, setWeb3] = useState(null);
  
    useEffect(() => {
      let instance;
      if (window.ethereum) {
        // set up a new provider
        try {
          instance = new Web3(window.ethereum);
        } catch (error) {
          console.error(error);
        }
      } else if (window.web3) {
        instance = new Web3(window.web3);
      } else {
        // fallback on localhost provider
        alert("Metamask not installed")
      }
      setWeb3(instance);
    }, []);
    return web3;
  };   
const ConnectBtn = () => {
    const [web3d,setWeb3d] = useState()
    const [ethaddr,setEthaddr] = useState()
    const [isAuth,setIsAuth] = useState(false)   

    const getUserAccount = async () => {
        if (window.ethereum) {
          try {
            await window.ethereum.request({ method: 'eth_accounts' });
            const web3 = new Web3(window.ethereum)
            setWeb3d(web3)
            setIsAuth(true)
            web3.eth.getAccounts().then(accounts => {
              console.log("Hello")
            });
          } catch (error) {
            console.error(error);
          }
        } else {
          alert("Metamask extensions not detected!");
        }
      };

    if (!isAuth){
        return(
            <Box sx={{ ml: 2 }}>
                <Button
                 variant="filled"
                 color="primary"
                 onClick={() => {
                     getUserAccount()
                     console.log(web3d)
                    }}
                >
                    Connect Wallet
                </Button>
            </Box>
        )
    } 
        return(
            <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              0xcfd......a3f6b
            </Typography>
            <Button
                 variant="filled"
                 color="primary"
                 onClick={async() => {
                     await window.ethereum.disconnect()
                     setIsAuth(false)
                 }}
            >Disconnect</Button>
            </Box>
        )
    
}

export {GetWeb3,ConnectBtn}
