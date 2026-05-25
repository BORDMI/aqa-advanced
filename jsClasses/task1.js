import Book from './Book.js';
import EBook from './EBook.js';

console.log("Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.");
const book1 = new Book('The Pragmatic Programmer', 'David Thomas', 1999);
const book2 = new Book('Clean Code', 'Robert C. Martin', 2008);
const book3 = new Book('Design Patterns', 'Gang of Four', 1994);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log('\nСтворіть інстанс (екземпляр) класу EBook та викличте метод printInfo');
const ebook1 = new EBook("You Don't Know JS", 'Kyle Simpson', 2015, 'EPUB');
ebook1.printInfo();

console.log('\nГеттери та сеттери');
book1.title = 'The Pragmatic Programmer (20th Anniversary)';
book1.year = 2019;
console.log(`Updated title: ${book1.title}, year: ${book1.year}`);
ebook1.fileFormat = 'PDF';
console.log(`Updated format: ${ebook1.fileFormat}`);

console.log(
  '\nВикличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)',
);
const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.findOldest(allBooks);
console.log('Oldest book:');
oldest.printInfo();

console.log(
  '\nСтворіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу' +
    ' як рядок ****та повертати екземпляр класу EBook',
);
const ebook2 = EBook.fromBook(book2, 'MOBI');
console.log('EBook created from Book:');
ebook2.printInfo();
