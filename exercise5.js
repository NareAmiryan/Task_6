 function color_red_or_green() {
    let array = document.getElementsByTagName('li'); 
    for (let i = 0 ; i < array.length; i++) {
      if (i % 2 == 0) {
        array[i].style.color = 'green';
      } else {
        array[i].style.color = 'red';
      }
    }
  };