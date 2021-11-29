import React, { useState } from 'react';
import Icon from './components/Icon'

//React-Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Reactstrap and Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'

const ItemArray = new Array(9).fill('empty');

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('')

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    ItemArray.fill('empty', 0, 9);
  }

  const checkIsWinner = () => {
    if (ItemArray[0] === ItemArray[1] &&
      ItemArray[0] === ItemArray[2] &&
      ItemArray[0] !== 'empty'
    ) {
      setWinMessage(`${ItemArray[0]} wins`)
    }
    else if (ItemArray[3] === ItemArray[4] &&
      ItemArray[4] === ItemArray[5] &&
      ItemArray[3] !== 'empty'
    ) {
      setWinMessage(`${ItemArray[3]} wins`)
    }
    else if (ItemArray[6] === ItemArray[7] &&
      ItemArray[7] === ItemArray[8] &&
      ItemArray[6] !== 'empty'
    ) {
      setWinMessage(`${ItemArray[6]} wins`)
    }
    else if (ItemArray[0] === ItemArray[3] &&
      ItemArray[3] === ItemArray[6] &&
      ItemArray[0] !== 'empty'
    ) {
      setWinMessage(`${ItemArray[0]} wins`)
    }
    else if (ItemArray[1] === ItemArray[4] &&
      ItemArray[4] === ItemArray[7] &&
      ItemArray[1] !== 'empty'
    ) {
      setWinMessage(`${ItemArray[1]} wins`)
    }
    else if (ItemArray[2] === ItemArray[5] &&
      ItemArray[5] === ItemArray[8] &&
      ItemArray[2] !== 'empty'
    ) {
      setWinMessage(`${ItemArray[2]} wins`)
    }
    else if (ItemArray[0] === ItemArray[4] &&
      ItemArray[4] === ItemArray[8] &&
      ItemArray[0] !== 'empty'
    ) {
      setWinMessage(`${ItemArray[0]} wins`)
    }
    else if (ItemArray[2] === ItemArray[4] &&
      ItemArray[4] === ItemArray[6] &&
      ItemArray[2] !== 'empty'
    ) {
      setWinMessage(`${ItemArray[2]} wins`)
    }
  }

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }
    if (ItemArray[itemNumber] === 'empty') {
      ItemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross);
    } else {
      return toast("Already Filled !", { type: "error" })
    }
    checkIsWinner();
  }

  return (
    <Container className='p-5'>
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mt-2 mb-2">
              <h1 className="text-success text-uppercase text-center">{winMessage}</h1>
              <Button
                color='success'
                block
                onClick={reloadGame}
              >Reload the Game</Button>
            </div>
          ) : (
            <h1 className="text-warning text-center">{isCross ? "Cross" : "Circle"}'s Turn</h1>
          )}
          <div className="grid">

            {ItemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)} color='warning'>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
