using BookLibrary.Entities;
using MediatR;
using System.ComponentModel.DataAnnotations;

namespace BookLibrary.Commands
{
    /// <summary>
    /// Command to create a new book in the library.
    /// </summary>
    public class CreateBook : IRequest<Book>
    {
        [Required]
        [StringLength(100)]
        public string Title { get; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; }

        [Required]
        [StringLength(50)]
        public string LastName { get; }

        [Range(0, int.MaxValue)]
        public int TotalCopies { get; }

        [Range(0, int.MaxValue)]
        public int CopiesInUse { get; } = 0;  

        public string? Type { get; set; }

        [StringLength(20)]
        public string? Isbn { get; set; }

        [StringLength(50)]
        public string? Category { get; set; }

        public CreateBook(string title, string firstName, string lastName, int totalCopies)
        {
            Title = title;
            FirstName = firstName;
            LastName = lastName;
            TotalCopies = totalCopies;
        }
    }
}
