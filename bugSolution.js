```javascript
// Correct usage of $inc operator with conditional update.
db.collection.updateOne({ name: "John", age: { $gt: 0 } }, { $inc: { age: -1 } });
```