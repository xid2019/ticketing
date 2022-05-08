import { Subjects, Publisher, ExpirationCompleteEvent } from "@xdtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}