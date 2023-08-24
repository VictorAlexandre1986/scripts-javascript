/**
 * Método Object.assign() 
Entre os métodos do construtor de Object, há um método Object.assign() 
que é usado para copiar os valores e propriedades de um ou mais objetos 
de origem para um objeto de destino. Ele invoca getters e setters,
pois usa [[Get]] na origem e [[Set]] no destino. 
Ele retorna o objeto de destino que possui propriedades e valores copiados do objeto de destino. 
Object.assign() não lança valores de origem nulos ou indefinidos. 
Formulários: 
 

    Object.assign() é usado para clonar um objeto.
    Object.assign() é usado para mesclar objetos com as mesmas propriedades.

    Object.assign(target, ...sources)

    Input : var obj1 = { a: 10 };
        var new_obj = Object.assign({}, obj1);
        console.log(new_obj);
    Output : Object { a: 10 }

    Copiando mais de um objeto
    Input : var obj1 = { a: 10 };
        var obj2 = { b: 20 };
        var obj3 = { c: 30 };
        var new_obj = Object.assign({}, obj1, obj2, obj3);
        console.log(new_obj);
        Output : Object { a: 10, b: 20, c: 30 }
 */

let obj = {
    nome: 'Victor'
   }
   let obj2 = Object.assign({}, obj);
   console.log(obj2);