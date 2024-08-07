import { useEffect, useState } from 'react'
import './App.css'


const Square = ({ value, onClick }) => {
  return <button className='square' onClick={onClick}>{value}</button>
}

function App() {

  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState('');

  const getWinner = () => {
    const winningPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i = 0; i < winningPatterns.length; i++){
      const [x, y, z] = winningPatterns[i];

      // if current pattern matches any of the winning patterns then return that pattern
      if(squares[x] && squares[x] == squares[y] && squares[y] == squares[z]){
        return squares[x];
      }
    }

    return null;
  }

  const handleClick = (getCurrentSquare) => {

    let cpySquares = [...squares];
    
    // if current pattern match with winning patterns or if cell is already filled then do nothing (return)
    if(getWinner(cpySquares) || cpySquares[getCurrentSquare]){
      return;
    }
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }


  useEffect(() => {
    if(!getWinner(squares) && squares.every((item) => item !== '')){
      setStatus(`This is a draw ! Please  restart the game`);
    }
    else if(getWinner(squares)){
      setStatus(`Winner is ${getWinner(squares)} . Please restart the game`)
    }
    else{
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn])

  console.log(squares);

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setStatus('');
  }

  return (
    <>
      <div className="main">
        <h1>Tic-Tac-Toe Game</h1>
          <div className="row">
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)}/>
            <Square value={squares[2]} onClick={() => handleClick(2)}/>
          </div>
          <div className="row">
          <Square value={squares[3]} onClick={() => handleClick(3)}/>
          <Square value={squares[4]} onClick={() => handleClick(4)}/>
          <Square value={squares[5]} onClick={() => handleClick(5)}/>
          </div>
          <div className="row">
          <Square value={squares[6]} onClick={() => handleClick(6)}/>
          <Square value={squares[7]} onClick={() => handleClick(7)}/>
          <Square value={squares[8]} onClick={() => handleClick(8)}/>
          </div>

        <h3>{status}</h3>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </>
  )
}

export default App
