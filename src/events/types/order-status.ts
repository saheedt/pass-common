export enum OrderStatus {
  // when a ticket order is created, but
  // ticket not reserved.
  Created = 'created',

  // when the ticket involded in an order is already reserved
  // by another user, or when user cancels the order, or 
  // when the order expires before payment.
  Cancelled = 'cancelled',

  // when the order sucessfully reserves ticket.
  AwaitingPayment = 'awaiting:payment',
  
  // when ticket reserved is sucessfully paid for.
  Complete = 'complete'
};
