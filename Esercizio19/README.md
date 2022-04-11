# Object Copying - Exercise 1
In questo esercizio sono stati creati due oggeti: `person1` e `person2`. All'oggetto `person2` è stato assegnato l'oggetto `person1`. Si desidera che venga modificata la proprietà `firstName` dell'oggetto `person2` in "Simon".

Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche l'oggetto `person1`?


-Perché la clonazione di un oggetto con questo metodo prevede l'utilizzo della stessa locazione di memoria per i parametri ed i conseguenti valori, il metodo Shallow, che permette una clonazione indipendente degli oggetti (Ma non dei sottoggetti e arrey), 
let person2 = Object.Assign({},person1);