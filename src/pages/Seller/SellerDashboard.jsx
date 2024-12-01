import React, { useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { BsPlusCircle, BsBox, BsClock, BsGear } from 'react-icons/bs';
import AddProduct from './AddProduct';
import ProductList from '../../Components/Core/SellerDashboard/ProductList';

function SellerDashboard() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
    setShowAddProduct(false);
  };

  return (
    <div className="container py-8">
      <div className="d-flex justify-content-between align-items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Seller Dashboard</h1>
        <Button
          variant="primary"
          onClick={() => setShowAddProduct(true)}
          className="d-flex align-items-center"
        >
          <BsPlusCircle className="me-2" />
          Add Product
        </Button>
      </div>

      <Row className="mb-8">
        <Col md={4}>
          <Card>
            <Card.Body className="d-flex align-items-center">
              <BsBox className="text-primary" size={32} />
              <div className="ms-3">
                <Card.Title>Total Products</Card.Title>
                <div className="text-2xl font-bold">{products.length}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card>
            <Card.Body className="d-flex align-items-center">
              <BsClock className="text-success" size={32} />
              <div className="ms-3">
                <Card.Title>Active Auctions</Card.Title>
                <div className="text-2xl font-bold">
                  {products.filter(p => p.status === 'active').length}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card>
            <Card.Body className="d-flex align-items-center">
              <BsGear className="text-warning" size={32} />
              <div className="ms-3">
                <Card.Title>Pending Approval</Card.Title>
                <div className="text-2xl font-bold">
                  {products.filter(p => p.status === 'pending').length}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {showAddProduct ? (
        <AddProduct onSubmit={handleAddProduct} onCancel={() => setShowAddProduct(false)} />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default SellerDashboard;