var Vue = new Vue({
  el: "#app",
  data: {
    list01: true,
    list02: false,
    list03: false,
    name: "kaito",
    age: 21,
    jender: "man",
    university:"HOSEI",
    a:"HTML&CSS",
    b:"JavaScript",
    c:"Python",
    d:"PHP",
    e:"SQL,laravel,jupyter notebook,git,jqury,vue.js",
    f:"react native,wordpress",
    
  },
  methods: {
    fight: function(list) {
      if (list === "list1") {
        this.list01 = true;
        this.list02 = false;
        this.list03 = false;
      }
      if (list === "list2") {
        this.list01 = false;
        this.list02 = true;
        this.list03 = false;
      }
      if (list === "list3") {
        this.list01 = false;
        this.list02 = false;
        this.list03 = true;
      }
    }
  }
});