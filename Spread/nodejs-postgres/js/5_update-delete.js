const db = require('./_database')

async function updateData(){
  var result
  await db.connect()
  await db.query("UPDATE participante SET nome='Carlos Augusto' WHERE id=1")
  result = await db.query("SELECT * FROM participante")
  console.log('Dados alterados com sucesso!')
  console.log(result.rows)
  await db.query("DELETE from evento_participante WHERE evento_id=1 AND participante_id=1")
  result = await db.query("SELECT * FROM evento_participante")
  console.log(result.rows)
  await db.end()
}

updateData()
