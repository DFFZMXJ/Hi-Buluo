-- Database structure of Hi Buluo.
-- Designed for SQLite. 
-- This is to be completed.
CREATE TABLE users(
    -- Main users list.
    uid INTEGER PRIMARY KEY NOT NULL UNIQUE AUTOINCREMENT,
    nickname TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    time_joined INTEGER NOT NULL DEFAULT 0, -- I hope to see a user like "ANA" existing on my website QAQ.
    birthday INTEGER,
    gender TEXT NOT NULL DEFAULT 'other',
    permission INTEGER NOT NULL DEFAULT 2, -- Suit for Hi Buluo's permission system.
    avatar INTEGER NOT NULL DEFAULT 0, -- Has the use set its own avatar?
    token TEXT NOT NULL UNIQUE, -- Token can keep users' accounts safe.
    verification TEXT NOT NULL DEFAULT '[false]', -- Verification of a user.
    banned TEXT -- Format: {"expire":233333333,"reason":"You did evil things."}
);
CREATE TABLE notifications(
    nid INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    type TEXT NOT NULL DEFAULT 'unknown', -- Type of a notification.
    trigger INTEGER NOT NULL DEFAULT -1, -- -1==System, 0==Administrator
    time_triggered INTEGER NOT NULL DEFAULT 0,
    content TEXT -- Additional content to provide information.
);
CREATE TABLE users_following(
    -- Followers.
    follower INTEGER PRIMARY KEY NOT NULL,
    following INTEGER NOT NULL
);
CREATE TABLE posts(
    -- Posts list.
    pyid INTEGER PRIMARY KEY NOT NULL UNIQUE AUTOINCREMENT, -- Q. How to read a post? A. /posts/py1
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    views INTEGER NOT NULL DEFAULT 0,
    sticky INTEGER NOT NULL DEFAULT 0, -- Fixed on the top.
    locked INTEGER NOT NULL DEFAULT 0,
    time_created INTEGER NOT NULL DEFAULT 0,
    time_updated INTEGER NOT NULL DEFAULT 0 -- 'Updated' === 'Replied'
);
CREATE TABLE buluo(
    -- Buluo list.
    bid INTEGER PRIMARY KEY NOT NULL UNIQUE AUTOINCREMENT, -- No ideas to name the identities.
    buluo_name TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    time_craeted INTEGER NOT NULL DEFAULT 0,
    avatar TEXT NOT NULL,
    background TEXT NOT NULL,
    category INTEGER NOT NULL
);
CREATE TABLE permissions(
    -- Permissions system.
    operation TEXT PRIMARY KEY NOT NULL UNIQUE, -- Operation. Such as 'pr.posts.publish'. Split with dots.
    permission INTEGER NOT NULL DEFAULT 0 -- Rquired permission level.
);
CREATE TABLE settings(
    -- Software settings.
    key TEXT PRIMARY KEY UNIQUE NOT NULL, -- Key of an option.
    value TEXT PRIMARY KEY
);