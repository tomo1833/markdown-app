-- CREATE DATABASE IF NOT EXISTS mdb;

-- CREATE TABLE IF NOT EXISTS mdb.markdown (url varchar(500), title varchar(250), body text);

-- REPLACE INTO mdb.markdown (url, title, body) VALUES ('test/test', 'test', '# TEST');
-- REPLACE INTO mdb.markdown (url, title, body) VALUES ('test/test2', 'test2', '# TEST2');

-- COMMIT;

CREATE TABLE IF NOT EXISTS mdb.markdown (url varchar(500), title varchar(250), body text, create_datetime DATETIME DEFAULT CURRENT_TIMESTAMP , update_datetime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

ALTER TABLE mdb.markdown ADD create_datetime DATETIME DEFAULT CURRENT_TIMESTAMP 
ALTER TABLE mdb.markdown ADD update_datetime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP


