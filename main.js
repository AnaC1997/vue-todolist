const { createApp } = Vue;

const app = createApp({
    data: function () {
        return {
            messaggio: 'To Do',
            elementi: [
                {
                    task: 'Andare al lavoro',
                    fatto: false
                },
                {
                    task: 'Fare una passeggiata con il cane',
                    fatto: false
                },
                {
                    task: 'Fare la chiamata di lavoro alle 13:00',
                    fatto: false
                },
                {
                    task: 'Andare dai miei genitori',
                    fatto: false
                },

            ],
            nuovaTask: " ",

        };
    },
    methods: {
        aggiungiTask() {
            // Verifica se nuovaTask non è vuota prima di aggiungere un nuovo elemento
            if (this.nuovaTask.trim() !== "") {
                this.elementi.push({ task: this.nuovaTask, fatto: false });
                this.nuovaTask = ""; // Resetta il valore di nuovaTask dopo l'aggiunta
            } else {
                alert("Inserisci una task valida"); // Aggiunge un messaggio di avviso se nuovaTask è vuota
            }
        },
        eliminaTask(index) {
            this.elementi.splice(index, 1);
        }
    },


});

app.mount('#app');