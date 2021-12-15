const tablica1 = document.getElementById("tablica1");
      const tablica2 = document.getElementById("tablica2");
      const btn = document.querySelector(".porownaj");
      var komunikat = document.getElementById("komunikat");
      console.log(btn);

      btn.addEventListener("click", function () {
        let tablica1Zawartosc = tablica1.value;
        let tab1 = tablica1Zawartosc.split(",");
        console.log(tab1);
        let tablica2Zawartosc = tablica2.value;
        let tab2 = tablica2Zawartosc.split(",");
        console.log(tab2);
        let tab3 = [];
        tab1.forEach((element) => {
          if (!tab2.includes(element)) tab3.push(element);
        });
        komunikat.innerText = tab3;
      });
