CREATE TABLE users (
    user_id INT(8) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(64),
    password BINARY(255) /*Done later because of security*/
);
    
create table categories (
	cat_id int(64) unsigned primary key auto_increment,
    category_title varchar(64)
);
/*Done Sept 28, 2017*/
create table subcategories (
	subcat_id int(64) unsigned primary key auto_increment,
	parent_id int(64) unsigned,
    subcategory_title varchar(255),
    subcategory_desc varchar(255)
);

create table topics (
	topic_id int(64) unsigned primary key auto_increment,
	category_id int(64) unsigned,
	subcategory_id int(64) unsigned,
	author varchar(64),
	title varchar(255),
	content text,
	date_posted date,
	views int(64) unsigned
);
/*Done Oct 11, 2017*/
create table replies(
	reply_id int(64) unsigned primary key auto_increment,
	category_id int(64) unsigned,
	subcategory_id int(64) unsigned,
	topic_id int(64) unsigned,
	author varchar(64),
	comment text,
	date_posted date
);
alter table topics add index(subcategory_id);
alter table topics add foreign key(category_id) references test_server.categories(cat_id) on delete restrict on update restrict;
alter table topics add foreign key(subcategory_id) references text_server.subcategories(subcat_id) on delete restrict on update restrict;
/*Done Oct 17, 2017*/
alter table subcategories add foreign key(parent_id) references test_server.categories(cat_id) on delete restrict on update restrict;
alter table replies add index(subcategory_id);
alter table replies add index(topic_id);
alter table replies add foreign key(category_id) references test_server.categories(cat_id) on delete restrict on update restrict;
alter table replies add foreign key(subcategory_id) references test_server.subcategories(subcat_id) on delete restrict on update restrict;
alter table replies add foreign key(topic_id) references test_server.topics(topic_id) on delete restrict on update restrict;
/*Done Oct 30, 2017*/
insert into categories (category_title) values ('Programming');
insert into categories (category_title) values ('Campus');
insert into categories (category_title) values ('Homework Help');
/*Done Nov 6, 2017*/
insert into subcategories (parent_id,subcategory_title,subcategory_desc) values (1,'C++','General Help');
insert into subcategories (parent_id,subcategory_title,subcategory_desc) values (1,'Java','General Assistance');
insert into subcategories (parent_id,subcategory_title,subcategory_desc) values (1,'White Space','Just....why?');
/*Done Nov 7, 2017*/
insert into subcategories (parent_id,subcategory_title,subcategory_desc) values (2,'Getting Around','Where is x?');
insert into subcategories (parent_id,subcategory_title,subcategory_desc) values (2,'Free Food','Where to find free food on campus');
insert into subcategories (parent_id,subcategory_title,subcategory_desc) values (2,'Library','To announce when you are making a library run.');
/*Done Nov 8, 2017*/
insert into subcategories (parent_id,subcategory_title,subcategory_desc) values (3,'Dia','Help me understand this man');
insert into subcategories (parent_id,subcategory_title,subcategory_desc) values (3,'Perry','Why does math have to be so hard?');
insert into subcategories (parent_id,subcategory_title,subcategory_desc) values (3,'Swoope','Scary history teacher?');
/*Done Nov 9, 2017*/