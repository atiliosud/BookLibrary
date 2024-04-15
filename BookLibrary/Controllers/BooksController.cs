using System;
using System.Threading.Tasks;
using BookLibrary.Entities;
using BookLibrary.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace BookLibrary.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IRepository<Book> repositoryBook;

        public BooksController(IRepository<Book> repositoryBook)
        {
            this.repositoryBook = repositoryBook;
        }

        [HttpGet]
        [EnableQuery]
        public async Task<IActionResult> GetBooks()
        {
            try
            {
                var books = await repositoryBook.GetAllAsync();
                return Ok(books);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error occurred while retrieving data.");
            }
        }
    }
}
