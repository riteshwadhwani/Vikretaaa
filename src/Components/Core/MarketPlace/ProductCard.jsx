import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { BsClock, BsCurrencyDollar } from 'react-icons/bs';
import { formatDistanceToNow } from 'date-fns';

function ProductCard({ product }) {
  const timeLeft = formatDistanceToNow(new Date(product.endTime), { addSuffix: true });
  
  const showDetails = () =>{
    let userDetails = localStorage.getItem("user_Details");
   if(userDetails === null){
    alert("Login First!!")
   }
  }
  return (
    <Card className="h-100">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          className="h-48 object-cover"
        />
        <Badge
          bg="dark"
          className="position-absolute top-2 end-2 bg-opacity-75"
        >
          {product.category}
        </Badge>
      </div>
      
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="text-gray-600">{product.description}</Card.Text>
        
        <div className="mt-4 space-y-2">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center text-gray-500">
              <BsCurrencyDollar className="me-1" />
              <span>Current Bid:</span>
            </div>
            <span className="text-success fw-bold">Rs {product.currentBid}</span>
          </div>
          
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center text-gray-500">
              <BsClock className="me-1" />
              <span>Time Left:</span>
            </div>
            <span className="fw-medium">{timeLeft}</span>
          </div>
        </div>
        
        <Button variant="primary" className="w-100 mt-4" onClick={showDetails}>
          Place Bid
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;