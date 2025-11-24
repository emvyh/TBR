-- potential user table 
create table users (
    user_id     serial primary key,
    username    varchar(50) unique not null
);

-- book table
create table book (
    isbn        varchar(13) primary key, 
    author      varchar(100),
    title       varchar(200),
    pages       integer check (pages > 0),
    publisher   varchar(100),
    is_owned    boolean default false,
    in_library      boolean default false
);

-- category table
create table category (
    cat_id      serial primary key, 
    cat_name    varchar(50) not null unique
);

--joining book and category 
create table book_category (
    isbn    varchar(13),
    cat_id  integer,
    primary key (isbn, cat_id),
    foreign key (isbn) references book(isbn) on delete cascade,
    foreign key (cat_id) references category(cat_id) on delete cascade
);

-- library book for user
create table library_book (
    isbn    varchar(13),
    user_id integer, 
    primary key (isbn, user_id),
    foreign key (isbn) references book(isbn) on delete cascade,
    foreign key (user_id) references users(user_id) on delete cascade
);

-- tbr books
create table tbr_book (
    isbn    varchar(13),
    user_id integer, 
    primary key (isbn, user_id),
    foreign key (isbn) references book(isbn) on delete cascade,
    foreign key (user_id) references users(user_id) on delete cascade
);

-- inserts 

INSERT INTO book (isbn, author, title, pages, publisher, is_owned, in_library)
VALUES
    (
        '9781250789167', 'Stephanie Garber',
        'Alchemy of Secrets', 269, 'Flatiron Books',
        TRUE, FALSE
    ),
    (
        '9781250268419', 'Stephanie Garber',
        'The Ballad of Never After', 351, 'Flatiron Books',
        TRUE, TRUE
    ),
    (
        '9781250851222', 'Stephanie Garber',
        'A Curse for True Love', 329, 'Flatiron Books',
        TRUE, TRUE
    ),
    (
        '9781250095312', 'Stephanie Garber',
        'Legendary', 462, 'Flatiron Books',
        FALSE, FALSE
    );

INSERT INTO category (cat_name)
values (
    'ebook'
),
(
    'physical'
);

insert into book_category (isbn, cat_id) 
values (
    '9781250789167','2'
),
(
    '9781250268419', '2'
),
(
    '9781250851222', '2'
),
(
    '9781250095312', '1'
);

-- insert into book
insert into library_book (isbn, user_id)
values 
(
    '9781250268419', '1'
),
(
    '9781250851222', '1'
);

insert into tbr_book (isbn, user_id)
values 
(
    '9781250789167','1'
),
(
    '9781250095312', '1'
);


-- random scripts that we might need 

--select all user library books
select b.*
from book as b 
join library_book as lb on b.isbn = lb.isbn
where lb.user_id = 1

--select all user tbr books
select b.*
from book as b 
join tbr as tb on b.isbn = tb.isbn
where tb.user_id = 1

-- select all user books from library that has a category
select b.*
from book as b 
join library_book as lb on b.isbn = lb.isbn
join book_category as bc on b.isbn = bc.isbn
join category as c on bc.cat_id = c.cat_id
where lb.user_id = 1
and c.cat_name = 'catnamehere'

-- select all user books from tbr that has a category
select b.*
from book as b 
join tbr_book as tb on b.isbn = tb.isbn
join book_category as bc on b.isbn = bc.isbn
join category as c on bc.cat_id = c.cat_id
where tb.user_id = 1
and c.cat_name = 'catnamehere'
