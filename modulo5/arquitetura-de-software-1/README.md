## ENDPOINTS 

* ## Criar usuário
  * Método: POST
  * Path: `/signup`
  * Body:
    * name (obrigatório)
    * email (obrigatório)
    * password (obrigatório)
* resposta: token
* ## Login usuário
  * Método: POSTT
  * Path: `/login`
  * Authorization 
  * Body:
    * email (obrigatório)
    * password (obrigatório)
* resposta: token

* ## Buscar todos os usuários
  * Método: GET
  * Path: `/all`
  * Authorization 
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * name
    * email
    * password
    * role 

* ## Deletar usuário**
  * Método: DELETE
  * Path: `/:id`
  * Authorization 
  * Body:
  	* message: "Usuário apagado com sucesso!"

