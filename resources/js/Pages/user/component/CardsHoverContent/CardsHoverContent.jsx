import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardsHoverContent.css";
import { Link } from '@inertiajs/react'

const CardsHoverContent = ({ img, style, title, collection, collection2 }) => {
  return (
    <Card className="my-4">
      <div className="img-hover-zoom">
        <Card.Img
          variant="top"
          src={img}
          className="img-fluid "
          style={style}
        />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {" "}
          <span className="newCollection">{collection}</span> {collection2}
        </Card.Text>
        <Link to="/shop">
          <Button variant="dark">SHOP NOW</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardsHoverContent;
