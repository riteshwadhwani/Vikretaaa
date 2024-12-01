import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { BsClock, BsCurrencyDollar, BsTag } from 'react-icons/bs';
import { formatDistanceToNow } from 'date-fns';

function ProductList({ products }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-4">Your Products</Card.Title>
        
        <div className="space-y-4">
          {products.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No products added yet</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="border rounded p-4 hover:shadow-md transition-shadow"
              >
                <div className="d-flex gap-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  
                  <div className="flex-grow-1">
                    <h3 className="h5">{product.title}</h3>
                    <p className="text-gray-600 small mb-2">{product.description}</p>
                    
                    <div className="d-flex flex-wrap gap-4">
                      <div className="d-flex align-items-center text-gray-500 small">
                        <BsCurrencyDollar className="me-1" />
                        Current Bid: ${product.currentBid}
                      </div>
                      
                      <div className="d-flex align-items-center text-gray-500 small">
                        <BsClock className="me-1" />
                        Ends: {formatDistanceToNow(new Date(product.endTime), { addSuffix: true })}
                      </div>
                      
                      <div className="d-flex align-items-center text-gray-500 small">
                        <BsTag className="me-1" />
                        {product.category}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Badge bg={product.status === 'active' ? 'success' : 'warning'}>
                      {product.status === 'active' ? 'Active' : 'Pending'}
                    </Badge>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductList;