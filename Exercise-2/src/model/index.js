import Author  from '../model/author.js';
import Book from '../model/book.js';

Author.hasMany(Book);
Book.belongsTo(Author);

export { Author, Book };
