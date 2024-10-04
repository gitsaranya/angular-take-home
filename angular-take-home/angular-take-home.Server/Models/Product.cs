namespace BookStore.Models
{
    public class Product
    {
        public int id { get; set; }
        public required string title { get; set; }
        public decimal price { get; set; }
        public string author { get; set; }
        public string genre { get; set; }
    }
}
