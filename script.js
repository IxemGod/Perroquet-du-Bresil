let plume1 = 8;
let plume2 = 8;
let plume3 = 8;



function TestPlume(Plume, ChampsPlume){
  if(Plume == 1){
    ChampsPlume.innerHTML = "🪶";
  }
  if(Plume == 2){
    ChampsPlume.innerHTML = "🪶🪶";
  }
  if(Plume == 3){
    ChampsPlume.innerHTML = "🪶🪶🪶";
  }
  if(Plume == 4){
    ChampsPlume.innerHTML = "🪶🪶🪶🪶";
  }
  if(Plume == 5){
    ChampsPlume.innerHTML = "🪶🪶🪶🪶🪶";
  }
  if(Plume == 6){
    ChampsPlume.innerHTML = "🪶🪶🪶🪶🪶🪶";
  }
  if(Plume == 7){
    ChampsPlume.innerHTML = "🪶🪶🪶🪶🪶🪶🪶";
  }
  if(Plume == 8){
    ChampsPlume.innerHTML = "🪶🪶🪶🪶🪶🪶🪶🪶";
  }
  if(Plume == 9){
    ChampsPlume.innerHTML = "🪶🪶🪶🪶🪶🪶🪶🪶🪶";
  }
  if(Plume == 10){
    ChampsPlume.innerHTML = "🪶🪶🪶🪶🪶🪶🪶🪶🪶🪶";
  }
}



document.addEventListener('DOMContentLoaded', function() {
    const btnPlusVerre1 = document.querySelector('.btnPlusVerre1');
    const btnPlusmetre1 = document.querySelector('.btnPlusmetre1');
    const verreDeBière1 = document.querySelector('.verre-de-bière1');
    const mètreDeBière1 = document.querySelector('.mètre-de-bière1');
    const btnPlusDuelGagn1 = document.querySelector('.btnPlusDuelGagner1');
    const btnPlusDuelPerdu1 = document.querySelector('.btnPlusDuelPerdu1');
    const DuelGanger1 = document.querySelector('.duelGagner1');
    const DuelPerdu1 = document.querySelector('.duelPerdu1');
    const NbrPeroquetFini1 = document.querySelector('.nombre-de-perroquet-fini1');
    const ChampsPlumes1 = document.querySelector('.plumes1');


    btnPlusDuelGagn1.addEventListener('click', function() {
    let currentValue = parseInt(DuelGanger1.value) + 1;
    DuelGanger1.value = currentValue;

      if(currentValue%3 == 0)
      {
        plume1 = plume1 - 1;
        if((plume1) === 0)
        {
          plume1 = 8;
          let ValeurAcutelNbrPerroquetFini = parseInt(NbrPeroquetFini1.value);
          NbrPeroquetFini1.value =  ValeurAcutelNbrPerroquetFini + 1;
        }
        TestPlume(plume1, ChampsPlumes1);
      }
    });



    btnPlusDuelPerdu1.addEventListener('click', function() {
    let currentValue = parseInt(DuelPerdu1.value) + 1;
    DuelPerdu1.value = currentValue;

      if(currentValue%3 == 0)
      {
        plume1 = plume1 + 1;
        if((plume1) == 9)
        {
          plume1 = 1;
          let ValeurAcutelNbrPerroquetFini = parseInt(NbrPeroquetFini1.value);
          NbrPeroquetFini1.value =  ValeurAcutelNbrPerroquetFini - 1;
        }
        TestPlume(plume1, ChampsPlumes1);
      }
    });



  
    btnPlusVerre1.addEventListener('click', function() {
      let currentValue = parseInt(verreDeBière1.value);
      verreDeBière1.value = currentValue + 1;
      if((currentValue+1) % 12 == 0){
        plume1 = plume1 - 1;
        if((plume1) === 0)
        {
          plume1 = 8;
          let ValeurAcutelNbrPerroquetFini = parseInt(NbrPeroquetFini1.value);
          NbrPeroquetFini1.value =  ValeurAcutelNbrPerroquetFini + 1;
        }
        TestPlume(plume1, ChampsPlumes1);
      }
      // Si nombre est un multiple de 12, on enlêve une plumes
    });
  
    btnPlusmetre1.addEventListener('click', function() {
    let currentValue = parseInt(mètreDeBière1.value);
    mètreDeBière1.value = currentValue + 1;
        plume1 = plume1 - 1;

        if((plume1) === 0)
        {
          plume1 = 8;
          let ValeurAcutelNbrPerroquetFini = parseInt(NbrPeroquetFini1.value);
          NbrPeroquetFini1.value =  ValeurAcutelNbrPerroquetFini + 1;
        }
        TestPlume(plume1, ChampsPlumes1);
      // Si on ajoute 1 litre, on retire un plumes
    });
  });





  
document.addEventListener('DOMContentLoaded', function() {
  const btnPlusVerre2 = document.querySelector('.btnPlusVerre2');
  const btnPlusmetre2 = document.querySelector('.btnPlusmetre2');
  const verreDeBière2 = document.querySelector('.verre-de-bière2');
  const mètreDeBière2 = document.querySelector('.mètre-de-bière2');
  const NbrPeroquetFini2 = document.querySelector('.nombre-de-perroquet-fini2');
  const ChampsPlumes2 = document.querySelector('.plumes2');
  const btnPlusDuelGagn2 = document.querySelector('.btnPlusDuelGagner2');
  const btnPlusDuelPerdu2 = document.querySelector('.btnPlusDuelPerdu2');
  const DuelGanger2 = document.querySelector('.duelGagner2');
  const DuelPerdu2 = document.querySelector('.duelPerdu2');

  btnPlusDuelGagn2.addEventListener('click', function() {
  let currentValue = parseInt(DuelGanger2.value) + 1;
  DuelGanger2.value = currentValue;

    if(currentValue%3 == 0)
    {
      plume2 = plume2 - 1;
      if((plume2) === 0)
      {
        plume2 = 8;
        let ValeurAcutelNbrPerroquetFini = parseInt(NbrPeroquetFini2.value);
        NbrPeroquetFini2.value =  ValeurAcutelNbrPerroquetFini + 1;
      }
      TestPlume(plume2, ChampsPlumes2);
    }
  });



  btnPlusDuelPerdu2.addEventListener('click', function() {
  let currentValue = parseInt(DuelPerdu2.value) + 1;
  DuelPerdu2.value = currentValue;

    if(currentValue%3 == 0)
    {
      plume2 = plume2 + 1;
      if((plume2) == 9)
      {
        plume2 = 1;
        let ValeurAcutelNbrPerroquetFini = parseInt(NbrPeroquetFini2.value);
        NbrPeroquetFini2.value =  ValeurAcutelNbrPerroquetFini - 1;
      }
      TestPlume(plume2, ChampsPlumes2);
    }
  });
  btnPlusVerre2.addEventListener('click', function() {
    let currentValue2 = parseInt(verreDeBière2.value);
    verreDeBière2.value = currentValue2 + 1;
    if((currentValue2+1) % 12 == 0){
      plume2 = plume2 - 1;
      if((plume2) === 0)
      {
        plume2 = 8;
        let ValeurAcutelNbrPerroquetFini2 = parseInt(NbrPeroquetFini2.value);
        NbrPeroquetFini2.value =  ValeurAcutelNbrPerroquetFini2 + 1;
      }
      TestPlume(plume2, ChampsPlumes2);
    }
    // Si nombre est un multiple de 12, on enlêve une plumes
  });

  btnPlusmetre2.addEventListener('click', function() {
    let currentValue2 = parseInt(mètreDeBière2.value);
    mètreDeBière2.value = currentValue2 + 1;
      plume2 = plume2 - 1;
      if((plume2) === 0)
      {
        plume2 = 8;
        let ValeurAcutelNbrPerroquetFini2 = parseInt(NbrPeroquetFini2.value);
        NbrPeroquetFini2.value =  ValeurAcutelNbrPerroquetFini2 + 1;
      }
      TestPlume(plume2, ChampsPlumes2);
    // Si on ajoute 1 litre, on retire un plumes
  });
});
  
document.addEventListener('DOMContentLoaded', function() {
  const btnPlusVerre3 = document.querySelector('.btnPlusVerre3');
  const btnPlusmetre3 = document.querySelector('.btnPlusmetre3');
  const verreDeBière3 = document.querySelector('.verre-de-bière3');
  const mètreDeBière3 = document.querySelector('.mètre-de-bière3');
  const NbrPeroquetFini3 = document.querySelector('.nombre-de-perroquet-fini3');
  const ChampsPlumes3 = document.querySelector('.plumes3');
  const btnPlusDuelGagn3 = document.querySelector('.btnPlusDuelGagner3');
  const btnPlusDuelPerdu3 = document.querySelector('.btnPlusDuelPerdu3');
  const DuelGanger3 = document.querySelector('.duelGagner3');
  const DuelPerdu3 = document.querySelector('.duelPerdu3');

  btnPlusDuelGagn3.addEventListener('click', function() {
    let currentValue = parseInt(DuelGanger3.value) + 1;
    DuelGanger3.value = currentValue;

    if(currentValue%3 == 0)
    {
      plume3 = plume3 - 1;
      if((plume3) === 0)
      {
          plume3 = 8;
          let ValeurAcutelNbrPerroquetFini = parseInt(NbrPeroquetFini3.value);
          NbrPeroquetFini3.value =  ValeurAcutelNbrPerroquetFini + 1;
      }
      TestPlume(plume3, ChampsPlumes3);
    }
  });



  btnPlusDuelPerdu3.addEventListener('click', function() {
    let currentValue = parseInt(DuelPerdu3.value) + 1;
    DuelPerdu3.value = currentValue;

    if(currentValue%3 == 0)
    {
      plume3 = plume3 + 1;
      if((plume3) == 9)
      {
          plume3 = 1;
          let ValeurAcutelNbrPerroquetFini = parseInt(NbrPeroquetFini3.value);
          NbrPeroquetFini3.value =  ValeurAcutelNbrPerroquetFini - 1;
      }

      TestPlume(plume3, ChampsPlumes3);
    }
  });


  btnPlusVerre3.addEventListener('click', function() {
    let currentValue3 = parseInt(verreDeBière3.value);
    verreDeBière3.value = currentValue3 + 1;
    if((currentValue3+1) % 12 == 0){
      plume3 = plume3 - 1;
      if((plume3) === 0)
      {
          plume3 = 8;
          let ValeurAcutelNbrPerroquetFini3 = parseInt(NbrPeroquetFini3.value);
          NbrPeroquetFini3.value =  ValeurAcutelNbrPerroquetFini3 + 1;
      }

      TestPlume(plume3, ChampsPlumes3);

    }
    // Si nombre est un multiple de 12, on enlêve une plumes
  });

  btnPlusmetre3.addEventListener('click', function() {
    let currentValue3 = parseInt(mètreDeBière3.value);
    mètreDeBière3.value = currentValue3 + 1;
      plume3 = plume3 - 1;
      if((plume3) === 0)
      {
        plume3 = 8;
          let ValeurAcutelNbrPerroquetFini3 = parseInt(NbrPeroquetFini3.value);
          NbrPeroquetFini3.value =  ValeurAcutelNbrPerroquetFini3 + 1;
      }
      TestPlume(plume3, ChampsPlumes3);
    // Si on ajoute 1 litre, on retire un plumes
  });
});