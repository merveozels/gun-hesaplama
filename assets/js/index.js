function calculateDiscount() {
  let day = document.getElementById('day');
  let result = (day.value % 7);

//  inputtan deger almak istiyorsan (veri.value kullanilir)

  if (result == 1 ) {
    alert('Bugün günlerden pazartesi');
  } else  if (result == 2){
    alert('Bugün günlerden salı');
  }
  else  if (result == 3){
    alert('Bugün günlerden çarşamba');
  }
  else  if (result == 4){
    alert('Bugün günlerden perşembe');
  }
  else  if (result == 5){
    alert('Bugün günlerden cuma');
  }
  else  if (result == 6){
    alert('Bugün günlerden cumartesi');
  }
  else if  (result == 0){
    alert('Bugün günlerden pazar');
  }

}