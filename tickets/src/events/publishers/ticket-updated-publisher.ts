import { Publisher, Subjects, TicketUpdatedEvent } from "@xdtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}