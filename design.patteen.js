/*
Múltkori óráról a példa befejezése
*/

/*
magát meghívó function
*/

(function () {
    console.log(asdfg);
});

const Module = (function () {
    let property1 = 2;
    let property2 = 15;

    function privateMethod() {
        console.log("Private method invoked!");
    };

    function publicMethod() {
        this.privateMethod();
    }

    return {
        publicMethod: publicMethod,
        property1: property1
    };

});

Module.publicMethod();

/*
Functionon belül vannak a functionok és mivel a kezdő function egy önmagát meghívó function és a 
többi egy lokális scope-ban van ezért a 2 function ami benne van az önmagát meghívó functionban nem 
éerhetők el kivülről csak az önmagát meghívó function return-je és ez azért jó, mert lehet szabályozni, 
hogy melyik metódusok, azok amelyek kivülről meghívhatóak -> 

mert ott visszaadunk egy objektumot és az objektumban nem az összes metódus meg tulajdonságot (let property) 
soroljuk fel és a privateMethod és a property2 nem elérhető, csak a publicMethod belsejéből (ha oda beletesszük, meghívjuk)
és ezt hívják ugyhogy privát 

A private metódust meghívtuk a public metódusban és kivülről csak a public metódust érhetjük el, mert azt kapjuk vissza
abban az objektumban, ami a returnben van(és mindig csak azt kapjuk vissza ami a returnben van), ha privat metódust szeretnénk 
meghívni Module.privateMethod, akkor kapnánk egy hibát 
*/

/*Mi a lényege a gyakorlatban -> példa - egy számológép, amiben vannak metódusaink*/

const Calculator = (function () {
 
    function add(a, b) {
        return a + b;
    }

    function subTract(a, b) {
        return a - b;
    }

    function div(a, b) {
        return a / b;
    }

    function mul(a, b) {
        return a * b;
    }

    function calculate(a, operation, b) {  //switch!!!!!!
        switch (operation) {
            case "+":
                return add(a, b); 
            case "-":
                return subTract(a, b);
            case "/":
                return div(a, b);
            case "*":
                return mul(a, b);
        }
    }

    return {
        calculate:calculate
    }

})(); //itt végén figyelmni kell arra, hogy még egy()

console.log(Calculator.calculate(5, "+", 10));
console.log(Calculator.calculate(5, "*", 15));


/*
returnben pedig visszaadjuk a calculate metódust 
Azért jó ez, mert ebben az esetben teljesen felesleges látnia a module patternt használónak a add, subTract, div. mul függvényeket(metódusokat)

csak a calculatet hívom meg és az meg hívatkozik az add, subTract, div, mul-ra 

Arra jó az egész, hogy elrejtsünk bizonyos függvényeket vagy változókat az objektumot felhasználó elől 
Bizonyos metódusokra és változókra csak mudule-unk belül tudunk hívatkozni 
*/

/**************************************************************************************************************************/

/*
Mi az a SASS ->
https://sass-lang.com

Gyakorlatilag egy css szintaktika és az a lényege, hogy a css-t mint programozási nyelvet tudjuk alkalmazni 
tehát vannak benne változók, vezérlési szerkezetek, függvények, eljárások 
*/