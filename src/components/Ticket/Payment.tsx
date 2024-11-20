// components/Ticket/Payment.tsx
import React from 'react';
import { Button, Container, Row, Col, Label } from 'reactstrap';

interface PaymentProps {
  selectedSeats: string[];
  totalPrice: number;
  onConfirmPayment: () => void;
}

const Payment: React.FC<PaymentProps> = ({ selectedSeats, totalPrice, onConfirmPayment }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Chi Tiết Thanh Toán</h3>
          <Label>Ghế Đã Chọn: {selectedSeats.join(', ')}</Label>
          <Label>Tổng Tiền: {totalPrice} VND</Label>
          <Button color="success" onClick={onConfirmPayment}>
            Xác nhận thanh toán
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
