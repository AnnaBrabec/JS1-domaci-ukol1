const email = {
    jmeno: prompt("Zadejte své jméno bez diakritiky."),
    prijmeni: prompt("Zadejte své příjmení bez diakritiky."),

};
document.body.innerHTML =
  `<p>${email.prijmeni.trim().slice(0,5).toLowerCase()}${email.jmeno.trim().slice(0,3).toLowerCase()}@fit.cvut.cz</p>`;
