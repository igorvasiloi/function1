var aParameter = parseInt(prompt('Please enter A'), 10);
var bParameter = parseInt(prompt('Please enter power B'), 10);
var cParameter = parseInt(prompt('Please enter power C'), 10);

function getDiscriminant(a, b, c) {
  return (b * b) - (4 * a * c);
}

alert(getDiscriminant(aParameter, bParameter, cParameter));


function getRoot(a, b, c) {
  if (getDiscriminant(a, b, c) > 0) {
    var x1;
    var x2;

    x1 = (-b + Math.sqrt(getDiscriminant(a, b, c))) / (2 * a);
    x2 = (-b - Math.sqrt(getDiscriminant(a, b, c))) / (2 * a);

    alert('x1 = ${x1}');
    alert('x2 = ${x2}');

  } else if (getDiscriminant(a, b, c) === 0) {
    x1 = (-b) / (2 * a);

    alert('x = ${x1}');
    
  } else {
    alert('Нет действительных корней');
  }
}
alert(getRoot(aParameter, bParameter, cParameter));
