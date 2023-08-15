import { useState, useEffect } from 'react'
import './App.css'

import { 
	createPublicClient, 
	http ,
	Address, 
	createWalletClient, 
	custom, 
	parseEther,
	publicActions,
} from "viem";
import { goerli, mainnet, polygon } from "viem/chains";
import 'viem/window'

function App() {
  const [count, setCount] = useState(0)

  const walletClient = createWalletClient({
    chain: mainnet,
    transport: custom(window.ethereum!),
  })

  console.log("wallet client", walletClient);

  useEffect(() => {
    const updateChain = async () => {
      await walletClient.switchChain({id: polygon.id})
    }

    updateChain();
  }, [])


  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
        <button>Send a transaction</button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
