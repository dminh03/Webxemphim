import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

interface DetailProps {
  movieTitle: string;
  description: string;
  onSelectShowtime: () => void;
}

const Detail: React.FC<DetailProps> = ({ movieTitle, description, onSelectShowtime }) => {
  return (
    <Container>
      <Row>
        <h1>{movieTitle}</h1>
      </Row>
      <Row>
        <p>{description}</p>
      </Row>
      <Row>
        <Col>
          <Button color="primary" onClick={onSelectShowtime}>
            Chọn suất chiếu
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
