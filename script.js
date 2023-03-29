function validateCNP(event) {
  event.preventDefault();
  const CNP = new FormData(event.target).get("CNP");
  const key = "279146358279";
  let last =
    key
      .split("")
      .reduce((acc, curr, index) => acc + parseInt(curr * CNP[index]), 0) % 11;
  last = last === 10 ? 0 : last;
  if (parseInt(CNP.slice(-1)) !== last) return false;
  return true;
}

function validateIBAN(event) {
  event.preventDefault();
  // RO49AAAA1B31007593840000
  let IBAN = new FormData(event.target).get("IBAN");
  IBAN = IBAN.slice(4, IBAN.length) + IBAN.slice(0, 4);
  IBAN.split("").forEach((element) => {
    const elementCode = element.charCodeAt(0);
    if (elementCode >= "A".charCodeAt(0) && elementCode <= "Z".charCodeAt(0))
      IBAN = IBAN.replaceAll(element, elementCode - 55);
  });
  const r = BigInt(IBAN) % BigInt(97);
  if (r !== BigInt(1)) return false;
  return true;
}
