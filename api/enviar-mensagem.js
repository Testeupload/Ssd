import Pusher from "pusher";

const pusher = new Pusher({
  appId: "2020441",
  key: "e84f475f308c35b653da",
  secret: "09ccb3b75674a39935b6",
  cluster: "sa1",
  useTLS: true,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, texto, avatar } = req.body;

    try {
      await pusher.trigger("chat-global", "nova-mensagem", {
        nome,
        texto,
        avatar,
      });
      res.status(200).json({ ok: true });
    } catch (error) {
      res.status(500).json({ error: "Erro ao enviar mensagem" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
