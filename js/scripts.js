// Business Logic
function AddressBook() {
  this.contacts = {};
  this.currentId = 0; 
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignID = function() {
  this.currentId += 1;
  return this.currentId;
}

// Contact Logic
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
