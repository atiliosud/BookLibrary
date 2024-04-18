using System;
using System.Threading.Tasks;
using BookLibrary.Commands;
using BookLibrary.Entities;
using BookLibrary.Repositories;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using NuGet.Protocol.Core.Types;

namespace BookLibrary.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IMediator _mediator;

        public BooksController(IMediator mediator)
        {
            _mediator = mediator;
        }
        // Listar livros com suporte para queries do DevExtreme
        [HttpGet]
        public async Task<IActionResult> Get(DataSourceLoadOptions loadOptions)
        {
            var books = await _repository.GetAllAsync();
            return Ok(DataSourceLoader.Load(books, loadOptions));
        }

        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> AddBook(CreateBook command)
        {
            try
            {
                var response = await _mediator.Send(command);
                return Ok(response);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error occurred while retrieving data.");
            }
        }
    }
}
