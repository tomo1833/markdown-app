CREATE DATABASE IF NOT EXISTS mdb;
-- CREATE TABLE IF NOT EXISTS mdb.markdown (url varchar(500), title varchar(250), body text);
-- REPLACE INTO mdb.markdown (url, title, body) VALUES ('test/test', 'test', '# TEST');
-- REPLACE INTO mdb.markdown (url, title, body) VALUES ('test/test2', 'test2', '# TEST2');
-- COMMIT;
--ALTER TABLE mdb.markdown ADD create_datetime DATETIME DEFAULT CURRENT_TIMESTAMP 
--ALTER TABLE mdb.markdown ADD update_datetime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
--ALTER TABLE mdb.markdown ADD id int NOT NULL AUTO_INCREMENT PRIMARY KEY
--CREATE TABLE IF NOT EXISTS mdb.markdown2 (id int NOT NULL AUTO_INCREMENT PRIMARY KEY , url varchar(500), title varchar(250), body text, create_datetime DATETIME DEFAULT CURRENT_TIMESTAMP , update_datetime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
--INSERT INTO mdb.markdown2 (url, title, body) SELECT url, title, body FROM mdb.markdown  
--DROP TABLE mdb.markdown;
--INSERT INTO mdb.markdown (url, title, body) SELECT url, title, body FROM mdb.markdown2  
--DROP TABLE mdb.markdown2;
CREATE TABLE IF NOT EXISTS markdown (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    url varchar(500),
    title varchar(250),
    body text,
    create_datetime DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_datetime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tag_master (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name varchar(250)
);

CREATE TABLE IF NOT EXISTS markdown_tag (
    id int, INDEX md_id_index(id), FOREIGN KEY fk_md_id(id) REFERENCES markdown(id),
    tag_id int, INDEX tag_id_index(tag_id), FOREIGN KEY fk_tag_id(tag_id) REFERENCES tag_master(id)
);


--mysql --user=mdbuser --password=mdbpass