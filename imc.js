function calculine {
  var appreciation="";
  var tl=document formimc.taille.value;
  var pds=document formimc.poids.value;
  var res-imc=pds/(tl*tl);
  if(res-imc<16,5)
     appreciation="Denutrition";
  else if(res-imc < 18,5)
     appreciation="Maigre";
  else if(res-imc < 25)
     appreciation="Normal";
  else if(res-imc < 30)
     appreciation="Gros";
  else if(res-imc > 30)
     appreciation="Obèse";
  else
    alerte ("Veillez saisir des valeurs numerique");
    document.formime.imc.value=res-imc;
    document.formime.app.value=appreciation;
      }
