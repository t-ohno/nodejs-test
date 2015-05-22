for (var i = 1; i<= 1000 ; i++) {
  db.collection.save({"name":"user" + i,"password":"password"});
  db.collection.count({});
}