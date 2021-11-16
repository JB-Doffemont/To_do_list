// Composant racine
const RootComponent = {
  // Data Properties
  data() {
    return {
      list: "",
      tableauToDo: [],
      tableauOngoing: [],
      tableauDone: [],
      showToDo: true,
      showOnGoing: true,
      showDone: true,
    };
  },

  methods: {
    // Methode qui permet de recupérer la valeur de l'input
    saisieInput(e) {
      this.list = e.target.value;
      console.log(this.list);
    },

    // Methode qui pousse la valeur de l'input dans la liste "à faire"
    addListToDo() {
      this.tableauToDo.push(this.list);
      this.list = "";
    },
    // Methodes qui suppriment et poussent les éléments dans les listes grace à la recuperation de l'index
    addListOngoing(index) {
      this.tableauOngoing.push(this.tableauToDo[index]);
      this.tableauToDo.splice(index, 1);
    },
    addListDone(index) {
      this.tableauDone.push(this.tableauOngoing[index]);
      this.tableauOngoing.splice(index, 1);
    },

    deleteElement(index) {
      this.tableauDone.splice(index, 1);
    },

    // Methodes qui gèrent l'affichage des différentes listes
    hideToDo() {
      this.showToDo = !this.showToDo;
    },

    hideOnGoing() {
      this.showOnGoing = !this.showOnGoing;
    },

    hideDone() {
      this.showDone = !this.showDone;
    },
  },
};

// Creation de l'applicaton et montage
Vue.createApp(RootComponent).mount("#root");
