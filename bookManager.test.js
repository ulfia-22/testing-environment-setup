const Book = require("../book");
const BookManager = require("../bookmanager");


describe("BookManager", () => {
  let bookManager;

  beforeEach(() => {
    bookManager = new BookManager();
  });

  test("Test menambahkan buku", () => {
    const book = new Book("Test Book", "Test Author", 2023);
    bookManager.addBook(book);
    expect(bookManager.getBookCount()).toBe(1);
  });

  test("Test menghapus buku yang ada", () => {
    const book = new Book("To Remove", "Author", 2023);
    bookManager.addBook(book);

    const removed = bookManager.removeBook("To Remove");
    expect(removed).toBe(true);
    expect(bookManager.getBookCount()).toBe(0);
  });

  // Test menghapus buku yang memang tidak terdapat pada list
  test("Test menghapus buku yang tidak ada", () => {
    const removed = bookManager.removeBook("Not Exist");
    expect(removed).toBe(false);
  });

  // Test mencari buku berdasarkan penulis
  test("Test mencari buku berdasarkan author", () => {
    const book1 = new Book("Book A", "Author X", 2020);
    const book2 = new Book("Book B", "Author Y", 2021);
    bookManager.addBook(book1);
    bookManager.addBook(book2);

    const result = bookManager.findBooksByAuthor("Author X");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Book A");
  });

  // Test mendapatkan semua buku
  test("Test mendapatkan semua buku", () => {
    const book1 = new Book("Book A", "Author X", 2020);
    const book2 = new Book("Book B", "Author Y", 2021);
    bookManager.addBook(book1);
    bookManager.addBook(book2);

    const allBooks = bookManager.getAllBooks();
    expect(allBooks).toHaveLength(2);
    expect(allBooks).toEqual(expect.arrayContaining([book1, book2]));
  });
});
