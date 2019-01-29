(function(){
  window['libraryStorage'] = {};
  window.librarySystem = function librarySystem(libraryName, callback, optionalDependencies){
    if(arguments.length > 1){
      libraryStorage[libraryName] = {
        dependencies: optionalDependencies,
        callback: callback,
        isMissingDependenciesFlag:false,
        cache: null
      }
      if(optionalDependencies instanceof Array){
        //this for loop checks if all dependencies are stored in library System
        for(var i=0; i< optionalDependencies.length;i++){
          if(librarySystem(optionalDependencies[i])===undefined){
            libraryStorage[libraryName].isMissingDependenciesFlag =true;
            return console.log(libraryName + ' is missing dependency: '+ optionalDependencies[i]);
          }
        }
        //this changes the optionalDependencies array values to the library itself
        optionalDependencies= optionalDependencies.map(function(dependencyName){
            return librarySystem(dependencyName);
        });
        libraryStorage[libraryName].isMissingDependenciesFlag =false;
        return libraryStorage[libraryName].cache = callback.apply(this,optionalDependencies);
      }
      //If there is no dependencies. set cache equal to return value of callback.
      return libraryStorage[libraryName].cache = callback()
    }else{
      if(libraryStorage[libraryName] === undefined){
        return undefined;
      }
      if(libraryStorage[libraryName].isMissingDependenciesFlag === true){
        librarySystem(libraryName, libraryStorage[libraryName].callback, libraryStorage[libraryName].dependencies)
      }
        return libraryStorage[libraryName].cache;
    }
  }

  window.clearLibraryStorage = function(){
    window['libraryStorage'] = {};
  }
})();
