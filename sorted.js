  var arr1 = [4, 5, 7, 9, 10, 34];
  var arr2 = [1, 3, 6, 8, 32, 33];
function merge(arr1, arr2)
{//arreglo numero 3	
	 var arr3 = [];

	 //juntamos los valores del arreglo 1 y 2 en el 3
	  for (var i = 0; i < arr1.length; i++) {
	  	arr3[i]=arr1[i];
	  }
	  for (var i = 0; i < arr2.length; i++) {
	  	arr3[i+6]=arr2[i];
	  }
	  //Usamos un bucle anidado
	  for(var i=0;i<(arr3.length-1);i++){
            for(var j=i+1;j<arr3.length;j++){
                if(arr3[i]>arr3[j]){
                    //Intercambiamos valores
                    var variableauxiliar=arr3[i];
                    arr3[i]=arr3[j];
                    arr3[j]=variableauxiliar;
 
                }
            }
        }

	  return(arr3);
}