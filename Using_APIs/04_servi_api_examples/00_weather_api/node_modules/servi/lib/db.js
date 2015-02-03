function serviDB(db) {
  this.db = db;
}

/**
* Insert a new record into the database
*
* @method insert
* @param {object} object - the record to insert
* @param {function} [callback] - a callback function to execute after the insert completes
* @example
 	var books = serviapp.useDatabase('booksdb');
  books.insert({title: 'The Trial', author: 'Franz Kafka'});
*/
serviDB.prototype.insert = function(params, cb) {
  if (typeof cb === 'function') {
    return this.db.insert(params, cb);
  } else {
    return this.db.insert(params);
  }
};

/**
* Find multiple records in the database
*
* @method find
* @param {object} searchParameters - an object containing the search parameters
* @param {function} callback - a callback function to execute after the search completes
* @example
 	var books = serviapp.useDatabase('booksdb');
  books.find({author: 'Franz Kafka'}, function(err, results){
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]._id, results[i].title, results[i].author);
    }
  });
*/
serviDB.prototype.find = function(params, cb) {
  if (typeof cb === 'function') {
    return this.db.find(params, cb);
  } else {
    return this.db.find(params);
  }
};

/**
* Find a single record in the database
*
* @method findOne
* @param {object} searchParameters - an object containing the search parameters
* @param {function} callback - a callback function to execute after the search completes
* @example
 	var books = serviapp.useDatabase('booksdb');
  books.findOne({author: 'Franz Kafka'}, function(err, result){
    console.log(results._id, results.title, results.author);
  });
*/
serviDB.prototype.findOne = function(params, cb) {
  if (typeof cb === 'function') {
    return this.db.findOne(params, cb);
  } else {
    return this.db.findOne(params);
  }
};

serviDB.prototype.count = function(params, cb) {
  return this.db.count.apply(this.db, arguments);
};

serviDB.prototype.update = function(params, update, options, cb) {
  return this.db.update.apply(this.db, arguments);
};

serviDB.prototype.remove = function(params, options, cb) {
  return this.db.remove.apply(this.db, arguments);
};

serviDB.prototype.ensureIndex = function(params, cb) {
  return this.db.ensureIndex.apply(this.db, arguments);
};

serviDB.prototype.removeIndex = function(params, cb) {
  return this.db.removeIndex.apply(this.db, arguments);
};

/**
* Get a single record from the database using its id
*
* @method getOne
* @param {string} id - the id of the record to retrieve
* @param {function} callback - a callback function to execute with the record
* @example
 	var books = serviapp.useDatabase('booksdb');
  books.getOne("some_id_here", function(result){
    console.log(result._id, result.title, result.author);
  });
*/
serviDB.prototype.getOne = function(id, cb) {
  if (typeof cb === 'function') {
    this.findOne({'_id': id}, function(err, doc){
      cb(doc);
    });
  } else {
    return this.findOne({'_id': id});
  }
};

/**
* Get all records from the database
*
* @method getAll
* @param {function} callback - a callback function to execute with the records
* @param {object} [sortBy] - optional object to sort by
* @param {integer} [limit] - optionally limit how many records to retreive
* @param {integer} [skip] - optionally skip a number of records
* @example
 	var books = serviapp.useDatabase('booksdb');
  books.getAll(function(results){
    console.log(results);
  });

  // sort by author's name in ascending order
  books.getAll({author: 1}, function(results){
    console.log(results);
  });

  // sort by author's name in descending order
  books.getAll({author: -1}, function(results){
    console.log(results);
  });

  // limit the results to 10
  books.getAll(10, function(results){
    console.log(results);
  });

  // limit the results to 10 and start at the 20th result
  books.getAll(20, 10, function(results){
    console.log(results);
  });
*/
serviDB.prototype.getAll = function() {
  var cb, sort, skip, limit = null;
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    if (typeof arg === 'object') sort = arg;
    if (typeof arg === 'function') cb = arg;
    if (typeof arg === 'number') {
      if (limit === null) limit = arg;
      else {
        skip = limit;
        limit = arg;
      }
    }
  }
  var cursor = this.find({});
  if (sort) {
    cursor.sort(sort);
  }
  if (skip) {
    cursor.skip(skip);
  }
  if (limit) {
    cursor.limit(limit);
  }
  if (cb) {
    cursor.exec(function(err, docs) {
      cb(docs);
    });
  } else {
    return cursor;
  }
};

/**
* Search for records in the database that match a value
*
* @method search
* @param {string} key - the key you are searching for
* @param {object} value - the value of of the key to search for
* @param {function} callback - the callback function to execute with the retrieved records
* @example
 	var books = serviapp.useDatabase('booksdb');

  // find all books writen by Kafka
  books.search('author', 'Kafka', function(results){
    console.log(results);
  });
*/

serviDB.prototype.search = function(key, val, cb) {
  var params = {};
  params[key] = val;
  if (typeof cb === 'function') {
    this.find(params, function(err, docs){
      cb(docs);
    });
  } else {
    return this.find(params);
  }
};

/**
* Insert a new record into the database
*
* @method add
* @param {object} object - the record to insert
* @example
 	var books = serviapp.useDatabase('booksdb');
  books.insert({title: 'The Man Without Qualities', author: 'Robert Musil'});
*/
serviDB.prototype.add = function(doc) {
  this.insert(doc);
};

/**
* Delete a record from the database using its id
*
* @method delete
* @param {integer} id - the id of the record to delete
* @example
 	var books = serviapp.useDatabase('booksdb');
  books.delete(id);
*/
serviDB.prototype.delete = function(id) {
  this.remove({'_id': id});
};

/**
* Change a record in the database using its id
*
* @method change
* @param {integer} id - the id of the record to change
* @param {object} fields - an object containing the fields to change
* @example
 	var books = serviapp.useDatabase('booksdb');
  books.change(id, {pages: 100});
*/
serviDB.prototype.change = function(id, fields) {
  this.update({'_id': id}, {$set: fields});
};

exports.db = serviDB;
