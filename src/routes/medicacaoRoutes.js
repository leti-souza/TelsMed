const express = require("express");
const router = express.Router();

const medicacaoController = require("../controllers/medicacaoController")

router.post("/criarmedicacao", medicacaoController.criarMedicacao);//ok
router.get("/medicacao/:id", medicacaoController.buscarMedicacaoId); // ok
router.get("/medicacao",medicacaoController.buscarTodasMedicacoes); // ok
router.patch("/medicacao/:id", medicacaoController.atualizarMedicacao); // ok
router.delete("/medicacao/:id", medicacaoController.deletarMedicacao)

module.exports = router;