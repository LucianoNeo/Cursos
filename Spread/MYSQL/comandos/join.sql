SELECT videos.nome_video, videos.autor_video, canais.nome_canal FROM videos_canais INNER JOIN videos ON videos_canais.fk_video = videos.id_video INNER JOIN canais ON videos_canais.fk_canal = canais.id_canal;

-- Não traz campos sem relacionamentos (null)
INNER JOIN = JOIN


-- Qdo tiver elementos null, pode se usar LEFT ou RIGHT OUTER JOIN
SELECT videos.nome_video, videos.autor_video, canais.nome_canal FROM videos_canais RIGHT OUTER JOIN videos ON videos_canais.fk_video = videos.id_video RIGHT OUTER JOIN canais ON videos_canais.fk_canal = canais.id_canal;




-- UNION para retornar dados de tabelas diferentes 
SELECT videos.id_video, videos.nome_video from videos UNION SELECT canais.id_canal, canais.nome_canal from canais;