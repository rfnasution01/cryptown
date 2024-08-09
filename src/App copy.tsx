import React, { useEffect, useState } from 'react'

interface Prices {
  [key: string]: string
}

const App: React.FC = () => {
  const [prices, setPrices] = useState<Prices>({})

  useEffect(() => {
    const ws = new WebSocket(
      'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin',
    )

    ws.onopen = () => {
      console.log('WebSocket connection opened')
    }

    ws.onmessage = (msg) => {
      const newPrices: Prices = JSON.parse(msg.data)
      setPrices((prevPrices) => ({ ...prevPrices, ...newPrices }))
    }

    ws.onclose = () => {
      console.log('WebSocket connection closed')
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    // Cleanup function to close the WebSocket connection when the component unmounts
    return () => {
      ws.close()
    }
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 font-bold">Current Prices</h1>
      <ul className="space-y-2">
        {Object.keys(prices).map((key) => (
          <li key={key} className="rounded border p-2 shadow-sm">
            <div>
              <strong>{key.toUpperCase()}:</strong> $
              {parseFloat(prices[key]).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
