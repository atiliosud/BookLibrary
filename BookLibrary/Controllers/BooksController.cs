using System;
using BookLibrary.Commands;
using BookLibrary.Entities;
using BookLibrary.Repositories;
using MediatR;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace BookLibrary.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController(IRepository<Book> repositoryBook) : ControllerBase
    {


        [HttpGet]
        [EnableQuery]
        public async Task<IActionResult> Index()
        {
            return Ok(await repositoryBook.GetAllAsync());
        }
    }
}
