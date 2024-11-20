// components/Ticket/SelectShowtime.tsx
import React, { useState } from 'react';
import { Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

interface Showtime {
  id: number;
  time: string;
}

interface SelectShowtimeProps {
  showtimes: Showtime[];
  onSelectSeat: (showtime: Showtime) => void;
}

const SelectShowtime: React.FC<SelectShowtimeProps> = ({ showtimes, onSelectSeat }) => {
  const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);

  const handleSelect = (showtime: Showtime) => {
    setSelectedShowtime(showtime);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Chọn Suất Chiếu</h3>
          <ListGroup horizontal>
            {showtimes.map((showtime) => (
              <ListGroupItem
                key={showtime.id}
                active={selectedShowtime?.id === showtime.id}
                onClick={() => handleSelect(showtime)}
              >
                {showtime.time}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            color="primary"
            disabled={!selectedShowtime}
            onClick={() => selectedShowtime && onSelectSeat(selectedShowtime)}
          >
            Tiếp tục
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectShowtime;
