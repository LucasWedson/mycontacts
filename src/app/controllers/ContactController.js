const ContactsRepository = require('../repositories/ContactsRepository');


class ContactController {
  async index(request, response) {

    const contacts = await ContactsRepository.findAll();
    // Listar todos os registros
    response.json(contacts);
  }

  show(){
    // Obter um registro
  }

  update(){
    // Editar um registro
  }

  delete () {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
