import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from './CardsData';
import Box from '@mui/material/Box';
import "./style.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';

const Cards = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(Cardsdata);
  // console.log(data);

  const addToItemFun = (element) => {
    dispatch(addToCart(element));
  }

  return (
    <Box className='container mt-3'>

      <Box className="row d-flex justify-content-center align-items-center">
        {
          data.map((element) => {
            return (
              <>
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style" key={element.id}>
                  <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                      Price : ₹ {element.price}
                    </Card.Text>
                    <Box className="button_div d-flex justify-content-center">
                      <Button variant="primary"
                        onClick={() => addToItemFun(element)}
                        className='col-lg-12'>Add to Cart</Button>
                    </Box>

                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </Box>
    </Box>
  )
}

export default Cards