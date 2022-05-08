import { Subjects, Publisher, OrderCancelledEvent } from "@xdtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}