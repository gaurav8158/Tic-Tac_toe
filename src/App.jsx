import { useState } from 'react'
import Icon from "./Components/Icon";
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

// take 9 empty value in a array
let arr = new Array(9).fill("")
console.log(arr);
const App = () => {

  // used two setstates one for set cross and one for set winner on every selection of cross or circle
  let [isCross, setCross] = useState(true);
  let [winner, setWinner] = useState("");

  const playAgain = () => {
    arr.fill("");
    setCross(true);
    setWinner(""); 
  }

  // winner check
  const findWinner = () => {
 // row 1
    if (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] != "")
      setWinner(arr[0] + " has won");
    // row 2:  
      else if (arr[3] == arr[4] && arr[5] == arr[3]  && arr[3] != "")
      setWinner(arr[3] + " has won");
     // row 3:
      else if (arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != "")
      setWinner(arr[6] + " has won");
     // column 1: 
      else if (arr[0] == arr[3] && arr[0] == arr[6] && arr[6] != "")
      setWinner(arr[0] + " has won");
    // column 2:
      else if (arr[1] == arr[4] && arr[1] == arr[7] && arr[7] != "")
      setWinner(arr[1] + " has won");
    // column 3:
      else if (arr[2] == arr[5] && arr[2] == arr[8] && arr[8] != "")
      setWinner(arr[2] + " has won");
     // diagonal 1:
      else if (arr[0] == arr[4] && arr[0] == arr[8] && arr[8] != "")
      setWinner(arr[0] + " has won");
      // diagonal 2:
      else if (arr[2] == arr[4] && arr[2] == arr[6] && arr[6] != "")
      setWinner(arr[2] + " has won");
      else if(arr.indexOf("") == -1) {
        setWinner("Draw")
     }
  }

  // change item
  const changeItem = (index) => {
    if (winner)
      return toast("Game has already been over");

    if (arr[index] != "")
      return toast("Open your eyes dude where are you tapping");

    else if (arr[index] == "") {
      arr[index] = isCross == true ? "cross" : "circle";
      setCross(!isCross)
      findWinner();
      console.log(arr);
    }
  }


  return (
    <div>
      <ToastContainer position="bottom-center" />
      {
        winner ? (
          <div>
            <h1>{winner.toUpperCase()}</h1>
            <button onClick={playAgain}>Play Again</button>
          </div>
        ) :
          (<h1> Chance is of {isCross ? "Cross" : "Circle"}</h1>)
      }
      <div className="grid">
        {
          arr.map((value, index) => (
            <div key={index} className="box" onClick={() => changeItem(index)}>
              <Icon ic={value} />
            </div>
          )
          )
        }
      </div>

    </div>
  )
}

export default App
