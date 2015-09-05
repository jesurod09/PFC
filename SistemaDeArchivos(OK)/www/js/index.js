
        //http://qnimate.com/working-with-file-system-using-intel-xdk/
        function creaArchivo()
        {
            alert("Creando archivo...");
            //PERSISTENT indica que cualquier cambio que hagamos en el sistema de ficheros, será                 permante.
            requestFileSystem(LocalFileSystem.PERSISTENT, 0, crea.onSuccess, crea.onError);
        }
        
        function listarArchivo()
        {
            //PERSISTENT indica que cualquier cambio que hagamos en el sistema de ficheros, será                 permante.
            alert("Listo todos los archivos");
            requestFileSystem(LocalFileSystem.PERSISTENT, 0, listar.onSuccess, listar.onError);
        }
        
        function leeArchivo()
        {
            alert("Leo el archivo indicado y lo muestro por pantalla");
            //PERSISTENT indica que cualquier cambio que hagamos en el sistema de ficheros, será                 permante.
            requestFileSystem(LocalFileSystem.PERSISTENT, 0, lee.onSuccess, lee.onError);
        }

var crea = {
        //El objeto fileSystem apunta al disco duro.
        onSuccess: function (fileSystem) 
        {
            var fileName = document.getElementById('fileName').value;
            var miTexto = document.getElementById('miTexto').value;
            alert("Atención. Se va a crear el archivo " + fileName);
            
            //fileSystem.root apunta al directorio de almacenamiento de la aplicación
            var directoryEntry = fileSystem.root;


            //vamos a crear un archivo llamado readme.txt. El método getFile actualmente crea un archivo y devuelve un puntero(FileEntry) .Si no existe, solamente devuelve un puntero al mismo. Devuelve el puntero de archivo como un parámetro de callback
            directoryEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry){
                //vamos a escribir algo en el archivo
                fileEntry.createWriter(function(writer){
                    writer.write(miTexto);
                    alert("Archivo " + fileName + " creado con éxito.");
                }, function(error){
                    console.log("Ha ocurrido un error mientras se intentaba escribir en el archivo. El código de error es " + error.code);
                    //alert("Ha ocurrido un error mientras se intentaba escribir en el archivo. El código de error es " + error.code");
                });
 
                
            }, function(error){
                console.log("Ha ocurrido un error mientras se intentaba obtener un puntero hacia el archivo. El código de errror es: " + error.code);
            });
            

        },
        
        onError: function (evt)
        {
            console.log("Un error ocurrió durante la petición al puntero del sistema de archivos. El código de error es: " + evt.code);
        }
}

var listar = {
        //El objeto fileSystem apunta al disco duro.
        onSuccess: function (fileSystem) 
        {
            alert("Listando...");
            //fileSystem.root apunta al directorio de almacenamiento de la aplicación
            var directoryEntry = fileSystem.root;
            

            //objeto para leer los contenidos del directorio
            var directoryReader = directoryEntry.createReader();
            
            //ahora lee el contenido usando la función readEntries.
            directoryReader.readEntries(function(entries){
                var i;
                for (i=0; i<entries.length; i++) 
                {
                    document.getElementById("listaDeArchivos").innerHTML += entries[i].name + "<br>";
                    console.log(entries[i].name);
                }
            },function(error){
                console.log("Fallo al intentar listar el directorio de contenidos. El código de error es: " + error.code);
            }); 

        },
        
        onError: function (evt)
        {
            console.log("Un error ocurrió durante la petición al puntero del sistema de archivos. El código de error es: " + evt.code);
        }

}

var lee = {
            //El objeto fileSystem apunta al disco duro.
        onSuccess: function (fileSystem) 
        {
            var fileName = document.getElementById('recuperar').value;
            
            alert("Atención. Se va a leer el archivo " + fileName);
            
            //fileSystem.root apunta al directorio de almacenamiento de la aplicación
            var directoryEntry = fileSystem.root;


            //vamos a crear un archivo llamado readme.txt. El método getFile actualmente crea un archivo y devuelve un puntero(FileEntry) .Si no existe, solamente devuelve un puntero al mismo. Devuelve el puntero de archivo como un parámetro de callback
            directoryEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry){

                //vamos a leer el contenido del archivo.
                fileEntry.file(function(file){
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        //la propiedad resultante es de tipo string si lees los datos como string. Si lees los datos como un array entonces se asigna a un objeto tipo array

                        document.getElementById("lectura").innerHTML = evt.target.result;
                        console.log(evt.target.result);
                    };
                    //para leer el contenido como binario usa la función readAsArrayBuffer
                    reader.readAsText(file);
                }, function(error){
                    console.log("Ha ocurrido un error mientras se intentaba leer el contenido del archivo. El código del error es: " + error.code);  
                });

                
            }, function(error){
                console.log("Ha ocurrido un error mientras se intentaba obtener un puntero hacia el archivo. El código de errror es: " + error.code);
            });

        },
        
        onError: function (evt)
        {
            console.log("Un error ocurrió durante la petición al puntero del sistema de archivos. El código de error es: " + evt.code);
        }
}