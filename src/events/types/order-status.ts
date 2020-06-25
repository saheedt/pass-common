export enum OrderStatus {
  // when a ticket order is created, but
  // ticket not reserved.
  created = 'created',

  // when the ticket involded in an order is already reserved
  // by another user, or when user cancels the order, or 
  // when the order expires before payment.
  cancelled = 'cancelled',

  // when the order sucessfully reserves ticket.
  AwaitingPayment = 'awaiting:payment',
  
  // when ticket reserved is sucessfully paid for.
  complete = 'complete'
};
