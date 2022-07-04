const db = require('./_database')

async function insertData(){
  await db.connect()
  // Criar Eventos

  

  const queryEventoParticipante = "INSERT INTO evento_participante (evento_id,participante_id) VALUES ($1, $2)"

  await db.query(queryEventoParticipante, [1, 1])
  await db.query(queryEventoParticipante, [1, 2])
  await db.query(queryEventoParticipante, [1, 3])

  // Adicionar participantes do evento Postgresql

  await db.query(queryEventoParticipante, [2, 3])
  await db.query(queryEventoParticipante, [2, 4])

  await db.end()

  console.log("Dados Inseridos");
}

insertData()
