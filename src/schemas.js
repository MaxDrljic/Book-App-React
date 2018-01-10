import { schema } from 'normalizr';

export const booksSchema = new schema.Entity(
    "books",
    {},
    { idAttribute: "_id" }
);