import { useAccount } from 'wagmi'

import { Account, Connect, Counter, NetworkSwitcher } from './components'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>OP Eth Denver Hackathon</h1>

      <Connect />

      {isConnected && (
        <>
          <Account />
          <hr />
          <Counter />
          <hr />
          <NetworkSwitcher />
        </>
      )}
    </>
  )
}
