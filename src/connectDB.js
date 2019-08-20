var baseName = "localBase", storeName = "customers";

function connectDB(fun){
  var request = indexedDB.open(baseName, 1);
  request.onerror = console.log;
  request.onsuccess = function(){
    fun(request.result);
  }
  request.onupgradeneeded = function(e){
    e.currentTarget.result.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
    connectDB(fun);
  }
} 

export default connectDB;