const router = require("express").Router();

router.get("/", (request, response) => {
  response.send({
    versao: "1.0",
    titulo: "TelsMed",
    descricao:
      "",
  });
});

module.exports = router