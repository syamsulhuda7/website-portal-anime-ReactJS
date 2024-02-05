/* eslint-disable react/prop-types */
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const cutSynopsis = (synopsis) => {
  const words = synopsis.split('');
  const cut = words.slice(0, 100).join('');
  if (words.length>20) {
    return cut + '...'
  }
  return cut;
};

export default class Cards extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="d-flex flex-wrap justify-content-center m-4">
        {data.map((item, i) => (
          <Card key={i} style={{ width: "18rem", margin: '20px' }}>
            <Card.Img variant="top" src={item.images.webp.image_url} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{cutSynopsis(item.synopsis)}</Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
