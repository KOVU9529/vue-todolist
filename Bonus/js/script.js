/*Ciao ragazzi,
Esercizio di oggi: Vue To Do List
nome repo: vue-todolist
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)*/

var app = new Vue (
    {
        //Punto di riferimento per inizializzare vue
        el:'#root',
        //Dentro data sarà presento il mio array di oggetti
        data:{
            //Creo il mio elemento inizialmnete vuoto per poi essere riempito
            newTodoText: '',
            //Array di oggetti
            todos: [
                {
                    text:'Fare i compiti',
                    done:true
                },
                {
                    text:'Fare la spesa',
                    done:true
                },
                {
                    text:'Fare il bucato',
                    done:true
                }
            ],
        },
        //All'interno di methods genero la funzione per aggiungere il nuovo elemento all'array
        methods:{
             // Genero la funzione per aggiungere il nuovo elemento
             addNewTodo() {
                if(this.newTodoText.length > 0) 
                {
                    //creo il mio oggetto
                    const newOb =
                    {
                        //Il valore della proprietà text diventa uguale a this.newTodoText 
                        text:this.newTodoText ,
                        //imposto inizialmente falsa (azione nella lista non ancora eseguita)
                        done:false
                    };
                    console.log(newOb);
                    // Pushare nell'array il nuovo oggetto creato
                    this.todos.push(newOb);
                }
                this.newTodoText = '';
            },
            //Rimuove con splice
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            // 2-BONUS cliccando sul testo dell'item, 
            // invertire il valore della proprietà done del todo corrispondente 
            // (se done era uguale a false, impostare true e viceversa)*/
            // al click cambiare la classe

            toggle(index){
                this.todos[index].done = !this.todos[index].done;
            }
        }
    }
)