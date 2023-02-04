fetch("phrases.json")
.then(response => response.json())
.then(phrases => {
   const textContainer = document.querySelector(".content h3 + p");
   phrases.forEach(phrase => {
      // cria uma tag para cada frase
      const p = document.createElement("p");
      p.innerText = phrase.texto;
      textContainer.appendChild(p);
   });
});