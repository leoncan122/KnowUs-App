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
  Date          DATE NOT NULL DEFAULT NOW(),
  from_userid   INT REFERENCES users(id),
  to_userid     INT REFERENCES users(id),
  category      VARCHAR(30),
  is_answered   BOOLEAN,
  is_draft      BOOLEAN
  );
CREATE TABLE answers(
  id            SERIAL PRIMARY KEY,
  question_id   INT REFERENCES questions(id),
  date          DATE NOT NULL DEFAULT NOW(),
  hour          TIME DEFAULT NOW(),
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
