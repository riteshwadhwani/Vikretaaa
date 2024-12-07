import React, { useState } from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';
import { BsSearch, BsFilter } from 'react-icons/bs';
import ProductCard from '../../Components/Core/MarketPlace/ProductCard';

function MarketPlace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const products = [
    {
      id: 1,
      title: "Vintage Camera",
      description: "Classic vintage camera in excellent condition",
      startingPrice: 299,
      currentBid: 3500,
      endTime: "2024-03-25T15:00:00",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      category: "electronics"
    },
    {
      id: 2,
      title: "Antique Watch",
      description: "Rare antique pocket watch from the 1900s",
      startingPrice: 4999,
      currentBid: 550,
      endTime: "2024-03-26T18:00:00",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      category: "antiques"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-8 ">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-8 ">
        <h1 className="text-3xl font-bold text-white mb-4 mb-md-0">Live Auctions</h1>
        
        <div className="d-flex gap-4 w-100 w-md-auto">
          <InputGroup>
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          
          <InputGroup>
            <InputGroup.Text>
              <BsFilter />
            </InputGroup.Text>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="antiques">Fashion</option>
              <option value="art">Home Appliances</option>
              <option value="jewelry">Books</option>
              <option value="jewelry">Groceries</option>
              <option value="jewelry">sports</option>
              <option value="jewelry">Toys</option>
              <option value="jewelry">Beauty Products</option>
              <option value="jewelry">Futniture</option>
            </Form.Select>
          </InputGroup>
        </div>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredProducts.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MarketPlace;