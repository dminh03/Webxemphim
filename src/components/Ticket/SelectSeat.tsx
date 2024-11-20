
import { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink, ListGroup, ListGroupItem, Row, Col, Label, Button } from "reactstrap";
const SEAT_TYPES = [
  { type: "EXECUTIVE", title: "Executive", price: 500 },
  { type: "PREMIUM_ECONOMY", title: "Premium Economy", price: 350 },
  { type: "ECONOMY", title: "Economy", price: 200 }
];
const MAX_SEAT_ALLOWED = 10;

interface SelectSeatProps {
  onNext: (tab: string, seatSelection: { seatCount: number; seatType: string | null }) => void;
}

export default function SelectSeat({ onNext }: SelectSeatProps) {
  const [seatCount, setSeatCount] = useState<number>(0);
  const [seatType, setSeatType] = useState<string | null>(null);
  const [isNextDisabled, setNextDisabled] = useState<boolean>(true);
  const RenderSeatCounts = () => {
    const seatItems = [];
    for (let i = 1; i <= MAX_SEAT_ALLOWED; i++) {
      seatItems.push(
        <PaginationItem key={i} active={seatCount === i}>
          <PaginationLink onClick={() => setSeatCount(i)}>{i}</PaginationLink>
        </PaginationItem>
      );
    }
    return seatItems;
  };
  useEffect(() => {
    setNextDisabled(!(seatCount > 0 && seatType !== null));
  }, [seatCount, seatType]);
  const handleNext = () => {
    if (seatType) {
      onNext("SEAT_SELECTION", { seatCount, seatType });
    }
  };

  return (
    <Row className="p-4">
      <Col md={6} className="mb-3">
        <Label for="seatType">Select Seat Type</Label>
        <ListGroup horizontal id="seatType">
          {SEAT_TYPES.map((item) => (
            <ListGroupItem
              key={item.type}
              active={seatType === item.type}
              tag="button"
              action
              onClick={() => setSeatType(item.type)}
            >
              {item.title} (₹{item.price}.00/seat)
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      
      <Col md={6} className="mb-3">
        <Label for="seatCount">Total Seats</Label>
        <Pagination aria-label="Seat selection pagination" id="seatCount">
          <RenderSeatCounts />
        </Pagination>
      </Col>

      <Col md={12} className="mb-3">
        <Label>
          Total Price:{" "}
          <b>
            ₹
            {seatCount > 0 && seatType
              ? (SEAT_TYPES.find((type) => type.type === seatType)?.price ?? 0) * seatCount
              : 0}.00
          </b>
        </Label>
      </Col>

      <Col md={12}>
        <Button color="primary" onClick={handleNext} disabled={isNextDisabled}>
          Next
        </Button>
      </Col>
    </Row>
  );
}
