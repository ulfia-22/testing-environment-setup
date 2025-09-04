import unittest
from book import Book
from bookmanager import BookManager

class TestBookManager(unittest.TestCase):
    def setUp(self):
        self.book_manager = BookManager()

    def test_add_book(self):
        """Test menambahkan buku"""
        book = Book("The Girl and The Ghost", "Hanna Alkaf", 2020)
        self.book_manager.add_book(book)
        self.assertEqual(1, self.book_manager.get_book_count())

    def test_remove_existing_book(self):
        """Test menghapus buku yang ada"""
        book = Book("Harry Potter", "JK Rowling", 2007)
        self.book_manager.add_book(book)

        removed = self.book_manager.remove_book("Harry Potter")
        self.assertTrue(removed)
        self.assertEqual(0, self.book_manager.get_book_count())

    def test_find_books_by_author(self):
        """Test mencari buku berdasarkan penulis"""
        b1 = Book("The Girl and The Ghost", "Hanna Alkaf", 2020)
        b2 = Book("Harry Potter", "JK Rowling", 2007)

        self.book_manager.add_book(b1)
        self.book_manager.add_book(b2)

        result = self.book_manager.find_books_by_author("Hanna Alkaf")
        self.assertEqual(1, len(result))
        self.assertIn(b1, result)

    def test_get_all_books(self):
        """Test mendapatkan semua buku"""
        b1 = Book("TG", "Hanna Alkaf", 2020)
        b2 = Book("HP", "JK Rowling", 2007)

        self.book_manager.add_book(b1)
        self.book_manager.add_book(b2)

        all_books = self.book_manager.get_all_books()
        self.assertEqual(2, len(all_books))
        self.assertIn(b1, all_books)
        self.assertIn(b2, all_books)


if __name__ == '__main__':
    unittest.main()
