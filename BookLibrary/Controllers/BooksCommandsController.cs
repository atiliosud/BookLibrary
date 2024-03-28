using BookLibrary.Commands;
using BookLibrary.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace BookLibrary.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksCommandsController(IMediator mediator) : ControllerBase
    {

        [HttpPost("create")]
        public async Task<ActionResult<Book>> CreatePerson(CreateBook request)
        {
            var book = await mediator.Send(request);

            return book;
        }
    }
}
