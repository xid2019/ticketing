import { Subjects, Publisher, PaymentCreatedEvent } from "@xdtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}