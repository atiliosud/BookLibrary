using System.ComponentModel.DataAnnotations;

public partial class Book
{
    [Key]
    public int BookId { get; set; }

    [Required]
    [StringLength(255)]
    public string Title { get; set; } = null!;

    [Required]
    [StringLength(100)]
    public string FirstName { get; set; } = null!;

    [Required]
    [StringLength(100)]
    public string LastName { get; set; } = null!;

    public int TotalCopies { get; set; }
    public int CopiesInUse { get; set; }

    [StringLength(50)]
    public string? Type { get; set; }

    [StringLength(20)]
    public string? Isbn { get; set; }

    [StringLength(50)]
    public string? Category { get; set; }
}
