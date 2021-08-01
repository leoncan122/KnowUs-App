CREATE TABLE users(
 id             serial primary key,
 user_name      VARCHAR(30) UNIQUE not null,
 user_mail      VARCHAR(30) not null,
 user_pass      VARCHAR(100) not null,
 country        VARCHAR(30),
 city           VARCHAR(30),
 profession     VARCHAR(30),
 is_profesional BOOLEAN
 );
CREATE TABLE public_questions(
  id            SERIAL PRIMARY KEY,
  text          VARCHAR (480),
  date          TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  from_userid   INT REFERENCES users(id),
  to_userid     INT REFERENCES users(id),
  category      VARCHAR(30),
  is_answered   BOOLEAN,
  is_draft      BOOLEAN
  );
CREATE TABLE answers(
  id            SERIAL PRIMARY KEY,
  question_id   INT REFERENCES public_questions(id),
  date          DATE NOT NULL DEFAULT NOW(),
  hour          TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  text          VARCHAR (480),
  is_draft      BOOLEAN
  );
CREATE TABLE direct_messages (
  id            SERIAL PRIMARY KEY,
  text          VARCHAR (480),
  date          DATE NOT NULL DEFAULT NOW(),
  from_userid   INT REFERENCES users(id),
  to_userid     INT REFERENCES users(id)
  );
  SELECT * FROM users;
  INSERT INTO public_questions (text,from_userid,to_userid,category,is_answered)
  VALUES('Desde cuando eres periodista?',1,2,'periodismo',true);
  
  INSERT INTO public_questions (text,from_userid,to_userid,category,is_answered)
  VALUES('Porque no los avala la ley?',1,2,'cuentacuentos',true);
  
  INSERT INTO public_questions (text,from_userid,to_userid,category,is_answered)
  VALUES('Como iniciaste?',1,2,'cuentacuentos',true);
  
  SELECT * FROM public_questions;
  
  INSERT INTO answers (question_id,text)
  VALUES (1,'desde los 9 anios')
  
  INSERT INTO answers (question_id,text)
  VALUES (2,'corrupcion.')
  INSERT INTO answers (question_id,text)
  VALUES (2,'desde que naci.');
  SELECT * FROM answers;
  INSERT INTO answers (question_id,text)
  VALUES (3,'desde el colegio fui muy curioso por la materia.');
  SELECT * FROM answers;
  
  SELECT * FROM public_questions pq JOIN answers a ON pq.id = a.question_id WHERE a.text 
  ILIKE '%DESDE%' AND is_answered = true OR pq.category ILIKE '%cuentacue%' AND is_answered = true 
  ORDER BY a.id DESC;
  
  INSERT INTO public_questions (text,from_userid, to_userid, category,is_draft)
  VALUES('Los estudios que demuestran que la papa nace del agua son reales?',1,2,'papero', false);
  INSERT INTO public_questions (text,from_userid, to_userid, category,is_draft)
  VALUES('Las noticias mienten?',1,3,'noticioso',false);
  INSERT INTO public_questions (text,from_userid, to_userid, category,is_draft)
  VALUES('Es cierto que glovo regala dinero?',3,1,'glovero',true);
  
  SELECT * FROM users u JOIN public_questions pq ON u.id = pq.from_userid
  WHERE pq.to_userid = 3 AND is_draft = false ORDER by pq.date DESC;
  
  SELECT u.id, u.user_name, pq.text, pq.date,pq.category,pq.is_answered,p.id, p.user_name, a.text, a.hour
  FROM public_questions pq JOIN answers a ON pq.id = a.question_id
  JOIN users u ON pq.from_userid = u.id
  JOIN users p ON pq.to_userid = p.id
  WHERE is_answered = true ORDER by a.hour DESC LIMIT 15;
  
  
  
  
