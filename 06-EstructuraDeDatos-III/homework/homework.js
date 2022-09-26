"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;

}


BinarySearchTree.prototype.insert =function(nuevoValor){

  if(this.value > nuevoValor){
    
    if(!this.left){
        this.left = new BinarySearchTree(nuevoValor);
    }else{
      this.left.insert(nuevoValor);
    }
  }

    if(this.value < nuevoValor){

      if(!this.right){
        this.right = new BinarySearchTree(nuevoValor);
      }else{
        this.right.insert(nuevoValor);
      }
    }
}

BinarySearchTree.prototype.size = function(){

  let contador = 1;

  if(this.left) contador += this.left.size();

  if(this.right) contador += this.right.size();


  return contador;

}

BinarySearchTree.prototype.contains = function(valor){


  if(this.value === valor) return true;
  
  if(this.left){

    if(this.left.contains(valor)) return true;
  }
    
  if(this.right){

    if(this.right.contains(valor)) return true;
  }
    return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb,order){

  if(order ==='in-order' || order === undefined)







  if(order === 'post-order'){
    cb(this.value);
    if(this.left && this.left.depthFirstForEach(cb,order));
    if(this.right && this.right.depthFirstForEach(cb,order));
  }
  
  if(order === 'pre-order'){
    if(this.left && this.left.depthFirstForEach(cb,order));
    if(this.right && this.right.depthFirstForEach(cb,order));
    cb(this.value);
  }

  
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb,value = []){

  if(this.left) value.push(this.left)
  
  if(this.right) value.push(this.right)

  cb(this.value)

  if(value.legth > 0){
    value.shift().breadthFirstForEach(cb,value)
  }
}







// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
