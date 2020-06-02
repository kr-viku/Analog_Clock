console.log("chal rha hun mai");
      const deg = 6;
      var hr = document.querySelector('#hr');
      var mn = document.querySelector('#mn');
      var sc = document.querySelector('#sc');

      setInterval(() =>{
        var day = new Date();
        
        var hh = day.getHours() * 30;
        // console.log(hh);
        var mm = day.getMinutes() * deg;
        console.log(mm);
        var ss = day.getSeconds() * deg;
        // console.log(ss);

        hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
      })