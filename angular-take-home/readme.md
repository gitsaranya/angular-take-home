# Overview
This take-home programming assessment is designed for the candidate to demonstrate their knowledge of angular, REST API design, and C# design principals. We are looking to get an understanding of your level of knowledge of the technology provided, and how you would approach a project. Code quality is the most important aspect of this test, don't spend all your time on styling.

# Output
The final result should be a data entry screen for a store which sells books. The screen should allow a user to create a new product and update an existing product. The API should allow us to insert/update the product and fetch back the product. We require that the book must have at least a title, this is required. You can add any additional properties you feel are necessary. 

# Requirements
Angular
Create a data entry form to create & update products
	a.	Must have a title (required field)
	b.  Add any additional fields as necessary
	c.  Must validate input
	d.	Must post to the API to save/update
		i.	Return only the product key on a 200 response
	e.	After post, fetch the product back by the product key

ASP.NET API
Create two API endpoints & any supporting classes
	a.	One to save/update a product
		i.	Must enforce validation from front end
		ii. Must persist the products in memory
	b.	One to get the product
