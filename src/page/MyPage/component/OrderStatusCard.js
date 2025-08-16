import React from "react";
import { Row, Col, Badge, Button } from "react-bootstrap";
import { badgeBg } from "../../../constants/order.constants";
import { currencyFormat } from "../../../utils/number";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../../features/order/orderSlice";

const OrderStatusCard = ({ orderItem }) => {
  const dispatch = useDispatch();
  const onCancelOrder = (id) => {
    if (window.confirm("주문을 취소하시겠습니까?")) {
      dispatch(deleteOrder({ id }));
    } else {
      return;
    }
  };
  return (
    <div>
      <Row className="status-card">
        <Col xs={2}>
          <img
            src={orderItem.items[0]?.productId?.image}
            alt={""}
            height={96}
          />
        </Col>
        <Col xs={8} className="order-info">
          <div>
            <strong>주문번호: {orderItem.orderNum}</strong>
          </div>

          <div className="text-12">{orderItem.createdAt.slice(0, 10)}</div>

          <div>
            {orderItem.items[0].productId.name}
            {orderItem.items.length > 1 && `외 ${orderItem.items.length - 1}개`}
          </div>
          <div>₩ {currencyFormat(orderItem.totalPrice)}</div>
        </Col>
        <Col md={2} className="vertical-middle">
          <div className="text-align-center text-12">주문상태</div>
          <Badge bg={badgeBg[orderItem.status]}>{orderItem.status}</Badge>
          {orderItem.status === "preparing" && (
            <Button
              variant="outline-secondary"
              size="sm"
              className="order-cancel"
              onClick={() => onCancelOrder(orderItem._id)}
            >
              주문취소
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default OrderStatusCard;
