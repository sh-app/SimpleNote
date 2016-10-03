# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | indexed
location        | string    | indexed
organization    | string    | indexed


## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign_key, indexed
notebook_id | integer   | not null, foreign key, indexed

## notebooks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key, indexed
description | string    |
image_url   | string    |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
topic        | string   | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key, indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key, indexed
