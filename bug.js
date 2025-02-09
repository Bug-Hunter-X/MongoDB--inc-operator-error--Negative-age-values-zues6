```javascript
// Incorrect usage of $inc operator in MongoDB update operation.
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } });
```