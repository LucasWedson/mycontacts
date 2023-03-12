const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Lucas',
    email: 'mateus@mail.com',
    phone: '555-555',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {

      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
