// Model -> User
// name, age, email, password, _id

// Create

const obj = {
    name: "Ayush",
    age: 21,
    email: "coding.ayush@gmail.com",
}

const newUser = new User(obj);
newUser.save();

// OR

User.create(obj);

// Fetch single document

User.findOne({ name: "Ayush" });  

// Fetch multiple document

User.find({ $or: [{ name: "Ayush" }, { age: 21 }] }) 

// Update

User.updateOne({ _id: "xyz" }, { name: "Anand" })
User.update

User.findAndUpdate()

// Delete

User.deleteOne()