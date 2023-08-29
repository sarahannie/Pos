const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.id);

  const brand = ["Infinix", "Samsung", "Nokia", "Xiaomi"];
 
 
  console.log( brand.slice(2, 4,) );
  console.log( brand)