const { Router } = require("express");
const router = Router();

router.get("/atendimentos", (req, res) => {
	res.send("Listando todos os atendimentos...");
});

router.post("/atendimentos", (req, res) => {
	res.send("Criando novo atendimento...");
});

router.put("/atendimento/:id", (req, res) => {
	const { id } = req.params;
	res.send(`Atualizando o atendimento ${id}`);
});


router.delete("/atendimento/id:", (req, res) => {
	const { id } = req.params;
	res.send(`Deletando atendimento ${id}`);
});

module.exports = router;

