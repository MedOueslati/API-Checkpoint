import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CardList = ({ items }) => {
  return (
    <div>
      <div className="card-list">
        {items.map((item) => (
          <Card key={item.id} style={{ width: "18rem", margin: "10px" }}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <ListGroup>
                <ListGroup.Item>Email:{item.email}</ListGroup.Item>
                <ListGroup.Item>{item.address.street}</ListGroup.Item>
                <ListGroup.Item>Suite: {item.address.suite}</ListGroup.Item>
                <ListGroup.Item>City:{item.address.city}</ListGroup.Item>
                <ListGroup.Item>Company: {item.company.name}</ListGroup.Item>
                <ListGroup.Item>Phone: {item.phone}</ListGroup.Item>
                <ListGroup.Item>ZipCode: {item.address.zipcode}</ListGroup.Item>
                <ListGroup.Item>Website: {item.website}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
