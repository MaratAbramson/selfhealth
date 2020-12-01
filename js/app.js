var app = new Vue({
  el: '#app',
  data: {
    gender: NaN,
    location: NaN,
    questionId: false,
    questionText: false,
    final: false,
    hide: false,
    figureLocation: '',
  },

  methods: {
    rerun() {
      document.location.href = "/";
    },
    start() {
      app.hide = true;
      app.send(false);
    },
    send(choise) {
      const answer = {
        gender: app.gender,
        location: app.location,
        questionId: app.questionId,
        choise: choise
      }
      axios.post('/', answer, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
        .then((response) => {
          app.questionId = response.data.questionId;
          app.final = response.data.final;
          app.questionText = response.data.questionText;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    setLocation() {
      app.isActive = true;
      app.figureLocation = event.target.parentNode.id;
      app.location = event.target.parentNode.getAttribute('data-location-value');
  }

}
})