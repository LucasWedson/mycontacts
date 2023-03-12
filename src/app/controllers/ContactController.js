const ContactsRepository = require('../repositories/ContactsRepository');


class ContactController {
  async index(request, response) {



    const contacts = await ContactsRepository.findAll();
    // Listar todos os registros
    response.json(contacts);

    // response.send(request.appId);
  }

  async show(request, response){
    const {id} =request.params;

    const contact = await ContactsRepository.findById(id);

    if(!contact){
      // 404: Not Found

      return response.status(404).json({error: 'User not found'});
    }

    response.json(contact);
  }

  update(){
    // Editar um registro
  }

  async delete (request, response) {
    // Deletar um registro

    const {id} = request.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact){
      // 404: Not Found

      return response.status(404).json({error: 'User not found'});
    }

    await ContactsRepository.delete(id);
    // Erro 204: No content
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
