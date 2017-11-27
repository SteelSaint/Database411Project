drop table subcategories;
select * from subcategories;
delete from subcategories where subcat_id=2;

select * from users;
delete from users where user_id=6;

alter table users drop column password;
alter table users add column password binary(255);

select * from users;

drop table users;