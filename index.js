$(function(){
  //Variables controlant les données entrées dans les champs textes
  var regexText =  /^[a-zA-ZÀ-Ÿ' -]+$/;//Regex traitant les nom, prénom, lieu de naissance
  var regexBirthdate =  /(\d{2})\/(\d{2})\/(\d{4})/;//Regex traitant la date de naissance au format jj/mm/aaaa
  var regexSociety =  /^[a-zA-ZÀ-Ÿ0-9' -]+$/;//Regex traitant la société
  var valid = false;//Variable validant le formulaire;
  //Fonction vérifiant le Nom au moment où on enlève le doigt de la touche
  $('#lastName').bind('keyup blur', function(){
    this.value = this.value.toUpperCase();//mise en majuscule pour la regex et parceque noms sont en majuscule
    if(!regexText.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#lastName').css('border','2px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#lastName').css('border','2px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction vérifiant le Prénom au moment où on enlève le doigt de la touche
  $('#firstName').bind('keyup blur',function(){
    var firstNameTemp = this.value.toString();
    this.value = firstNameTemp.charAt(0).toUpperCase() + firstNameTemp.substring(1);
    if(!regexText.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#firstName').css('border','2px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#firstName').css('border','2px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction vérifiant la date de naissance au moment où on enlève le doigt de la touche
  $('#birthDate').bind('keyup blur',function(){
    if(!regexBirthdate.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#birthDate').css('border','2px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#birthDate').css('border','2px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction vérifiant le lieu de naissance au moment où on enlève le doigt de la touche
  $('#birthPlace').bind('keyup blur',function(){
    var birthPlaceTemp = this.value.toString();
    this.value = birthPlaceTemp.charAt(0).toUpperCase() + birthPlaceTemp.substring(1);
    if(!regexText.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#birthPlace').css('border','2px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#birthPlace').css('border','2px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction vérifiant l'emploi au moment où on enlève le doigt de la touche
  $('#employment').bind('keyup blur',function(){
    var employmentTemp = this.value.toString();
    this.value = employmentTemp.charAt(0).toUpperCase() + employmentTemp.substring(1);
    if(!regexText.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#employment').css('border','2px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#employment').css('border','2px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction vérifiant la société au moment où on enlève le doigt de la touche
  $('#society').bind('keyup blur',function(){
    var societyTemp = this.value.toString();
    this.value = societyTemp.charAt(0).toUpperCase() + societyTemp.substring(1);
    if(!regexSociety.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#society').css('border','2px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#society').css('border','2px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction validant le formulaire et affichant le résultat demandé
  $('#generate').click(function(){
    if(valid===false){
      alert('Des champs restent invalides, veuillez corriger votre saisie.');
    }else{
      //Affichage
      //Récupération des données remplies dans les champs
      var firstName = $('#firstName').val();
      var lastName = $('#lastName').val();
      var birthDate = $('#birthDate').val();
      var birthPlace = $('#birthPlace').val();
      var employment = $('#employment').val();
      var society = $('#society').val();
      //Mise en forme par concaténation
      var result = firstName+' '+lastName+', né(e) le '+birthDate+' à '+birthPlace+', actuellement '+employment+' à '+society+'.'
      //Affichage dans une fenêtre
      alert(result);
    }
  });
})
