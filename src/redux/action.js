// actions.js
import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/addContact', (contact) => {
//     return {
//       payload: { contact }, // Wrap the contact data in an object
//     };
//   });

export const addContact = createAction('contacts/addContact');

// export const addContact = createAction('contacts/addContact');
export const updateContact = createAction('contacts/updateContact');
export const deleteContact = createAction('contacts/deleteContact');


// // redux/actions.d.ts
// declare module '../redux/actions' {
//     export const addContact: (contact: ContactType) => ActionType;
//     export const updateContact: (id: string, updatedData: ContactType) => ActionType;
//     export const deleteContact: (id: string) => ActionType;
  
//     // Define types as needed
//   }