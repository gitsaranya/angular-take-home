using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using BookStore.Models;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : Controller
    {
        public static List<Product> _product = new List<Product>();
        public static int _nextId = 1;

        [HttpPost]
        public ActionResult<int> SaveProduct([FromBody] Product product)
        {
            if (product == null || string.IsNullOrWhiteSpace(product.title))
            {
                return BadRequest("Invalid product data.");
            }

            product.id = _nextId++;
            _product.Add(product);

            return Ok(product);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = _product.Find(p => p.id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
