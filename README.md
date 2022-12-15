
<h3 align="center"> 
<img src='./assets/TELSMED--LOGO.png' height= 180 width= 280>
</h3>

<div align = "center">

> Projeto final para o bootcamp {reprograma} back-end. Aplicativo voltado para auxiliar
idosos e/ou seus responsáveis na utilização correta da medicações. Acesse a apresentação 
<!-- [aqui!](https://www.canva.com/design/DAFHis5Rtuc/1UVpdijDOwMYiR4ux6eQWQ/view?utm_content=DAFHis5Rtuc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink) -->

</div>

#  📑 **Sumário**

- [Tema](#tema)
- [Problema](#problema)
- [Arquitetura](#arquitetura)
- [Rotas](#rotas)


## **Tema**
TelsMed - Minha Farmácia! É uma API que visa para auxiliar idosos e/ou seus responsáveis na utilização correta dos medicamentos no dia-a-dia. A escolha desse tema também é uma forma de homenagear a minha avó materna, Telma Araújo, que por muitos anos utilizou medicamentos para controlar a hipertensão. 

## **Problema**
De acordo com uma pesquisa de campo realizada com três agentes de saúde da Upinha Alto do Pascoal, situada na comunidade do Alto do Pascoal no bairro de água fria - Recife/PE. 
De acordo com os dados informados pelas agentes, cuja as áreas que ambas são responsáveis possuem cerca de 2.500 pessoas e 70% dessas são idosos. Esta pesquisa levou em consideração as respostas das agentes de saúde e dos respectivos idosos e/ou seus responsáveis. De acordo com os dados coletados, foi constatado que cerca de 65% desses idosos não tomam seus medicamentos corretamente, e os motivos mais citados por eles e?ou seus responsáveis e as agentes de saúde, que levam a essa má utilização dos medicamentos foram os seguintes:

- 8% Não sabem ler, são analfabetos,
- 35% Se confundem na hora tomar os medicamentos, principalmente se for mais de 02 tipos de medicamentos diferentes durante o dia,
- 22% Não aceitam que tem determinada comorbidade e não tomam a medicação prescrita ou só tomam quando sentem algum desconforto.

## **Objetivo**
Este aplicativo foi desenvolvido com o objetivo de auxiliar idosos na utilização correta dos medicamentos prescritos. Espera-se que esse app possibilite que os idosos possam administrar/tomar suas medicações diariamente, sem o suporte constante de uma pessoa e/ou seu responsável.

## **Arquitetura**
Esse projeto foi construído utilizando a arquitetura MVC, acrônimo para Model-View-Controller ou, em português, Arquitetura Modelo-Visão-Controle. MVC é um padrão de arquitetura de software, voltado para o reuso de códigos e onde a separação dos mesmos ocorre em três camadas interconectadas. A apresentação dos dados é separada dos métodos que interagem com o banco de dados.

O servidor, criado dentro do repositório TelsMed, conta com a seguinte estrutura:

    \--📂 TelsMed
        |
        |    .env
        |    .env.example
        |    .gitiignore
        |    package-lock.json
        |    package.json
        |    README.md
        |    server.js
        |    TELSMED-LOG.png
        |
        |--📂src
              |
              |  app.js
              |
              📂---config
                  |
                  | database.js
                  |
              📂controllers    
                  |
                  | authController.js
                  | medicacaoController.js
                  | pacienteController.js
                  |
              📂middlewares
                  |
                  | auth.js
                  |
              📂models
                  |  
                  | MedicacaoSchema.js
                  | PacienteSchema.js
                  | UserSchema.js
                  |     
              📂routes
                  | 
                  | medicacaoRoutes.js
                  | pacienteRoutes.js
                  |


## **Rotas**
Esta API está sendo executada na `porta 9095` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:9095/` antes dos endpoints de requisição.

|VERBO | ENDPOINT | DESCRIÇÃO|
|------|------|----------|
|POST | /create | Cria um usuário para acessar o app TelsMed|
|POST | /login | Cria um login de acesso ao aplicativo|
|GET | /users | Retorna o usuário cadastrado no aplicativo|
|------|------|----------|
|VERBO | ENDPOINT | DESCRIÇÃO|
|POST | /criarpaciente| Cadastra um novo paciente no Aplicativo|
|GET | /paciente| Retorna uma lista com todos os pacientes cadastrados no app|
|GET | /paciente/:id| Retorna o paciente pelo id informado|
|PATCH | /:id | Atualiza os dados do paciente escolhido|
|DELETE | /:id | Delete o paciente escolhido do aoplicativo| 
|------|------|----------|
|VERBO | ENDPOINT | DESCRIÇÃO|
|POST | /criarmedicacao | Cadastra uma nova medicação no aplicativo|
|GET | /medicacao/:id | Retorna a medicação pelo id informado|
|GET | /medicacao | Retorna uma lista com todas as medicações cadastradas no app|
|PATCH | /medicacao/:id | Atualiza os dados da medicação escolhida|
|DELETE | /medicacao/:id | Deleta a medicação escolhida do aplicativo|


##

#### **Implementações futuras**

- [ ] Integração ao front-end 
- [ ] Testes
- [ ] Desenvolvimento do Alarme
- [ ] Etiquetas de identificação para impressão
- [ ] Desenvolvimento de Registro/cadastramento de Receita - scanner e foto

##

_O aplicativo TelsMed, é um app fictício para a elaboração do projeto final de conclusão do bootcamp {reprograma}_

##

## **Desenvolvedora**
<!-- <img src='./assets/foto.jpeg' width = 1200 alt = 'foto autora'> |  -->

Me chamo Letícia Araújo, sou de Recife-PE. Sou formada em Arquitetura e Urbanismo pela UNINASSAU - Recife e em Segurança do trabalho pelo SENAI- PE. No momento estou em transição de carreira para área de programação/TI - Back-end no programa todas em tech da {reprograma}. Sempre gostei de aprender algo novo e com a programação não foi diferente, falo sempre que foi amor ao primeiro código 😄. Dentre as minhas Habilidades, gosto sempre de destacar a minha criatividade, pois sempre procuro uma forma criativa de fazer algo. Sou mãe de alguns pets, minha baby dog 🐶mais velha, Pitty, dois lindos cats 🐱, um de de 6 anos e outro de 2 anos, mas tive 6 lindos cats, e um jabutí🐢😊.

---


Conecte-se comigo! 

<div>
  <a href = "mailto: leticia.souzaprogramacao@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23EA4335?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/leticia--araujo/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  </div>

##