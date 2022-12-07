const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const pacienteController = require("../controllers/pacienteController")

const { checkAuth } = require("../middlewares/auth");

// ROTAS PARA PACIENTES E USUÁRIOS

router.post("/create", pacienteController.criarUsuario);//ok
router.post("/login", authController.login); //ok
router.get("/users", checkAuth, pacienteController.getAll); //retornar usuários
router.post("/criarpaciente", pacienteController.criarPaciente);//ok
router.get("/buscarpacientes",pacienteController.buscarTodosPacientes); // ok
router.get("/paciente/:id", pacienteController.buscarPacienteId); //ok
router.patch("/:id", checkAuth, pacienteController.atualizarPaciente); //ok
router.delete("/:id", checkAuth, pacienteController.deletarPaciente)

module.exports = router;