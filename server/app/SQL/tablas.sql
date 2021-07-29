create table users(
 id 		serial primary key,
 user_name 	varchar(30) not null,
 user_Mail 	varchar(30) not null,
 user_Pass 	Varchar(30),
 country 	varchar(30),
 city		varchar(30),
 profession varchar(30),
 profesional boolean
 );
 CREATE TABLE DM_sent (
  id       		SERIAL PRIMARY KEY,
  message 		varchar (480),
  Date			DATE,
  from_userid  	INT REFERENCES users(id),
  to_userid    	INT REFERENCES users(id)
  );
create table questions(
  id       		SERIAL PRIMARY KEY,
  message 		varchar (480),
  Date			DATE,
  from_userid  	INT REFERENCES users(id),
  to_userid     INT REFERENCES users(id),
  category		varchar(30),
  answered 		boolean,
  draft			boolean
  );
create table answer(
  id       		SERIAL PRIMARY KEY,
  question_id 	INT REFERENCES questions(id),
  Date			DATE,
  message 		varchar (480),
  draft			boolean
  );
 CREATE TABLE DM_received (
  id       SERIAL PRIMARY KEY,
  id_dmsent 	 	INT REFERENCES dm_sent(id),
  Date				DATE,
  message 			varchar (480),
  not_read			boolean
  );
