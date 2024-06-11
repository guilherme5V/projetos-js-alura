let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
    createCanvas(700, 600);
    createElement('h2', 'recomendador de filme')
    createSpan('idade:  ')
    campoIdade = createInput("15");
    campoFantasia = createCheckbox("Gosta de Fantasia ?");
    campoAventura = createCheckbox("Gosta de aventura ?");
}


function draw() {
    background(95,205,217);
    
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
    fill(color(2,115,115))
    textAlign(CENTER, CENTER)
    textSize(38)
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "the boys";
    } else {
      if(idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Harry potter";
        } else {
          return "Ladrões de bicicleta";
        }
      }
    }
  }



}

