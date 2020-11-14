var question =
  "http://127.0.0.1:41349/data/data.json";

var app = new Vue({
  el: '#app',
  data: {
    gender: null,
    location: null,
    questionId: null,
    questionText: '',
    final: false,
  },
  
  methods: {
    
    sendStart: function (event) {
      final = true;
    },
    
    sendTrue() {
      
    },
    
    sendFalse() {
      
    },
    
  }
  
})