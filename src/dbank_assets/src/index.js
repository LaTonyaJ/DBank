import { dbank } from "../../declarations/dbank";

window.addEventListener('load', async function getBalance() {
  let currenetValue = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currenetValue * 100) / 100;
});

document.querySelector("form").addEventListener('submit', async (event) => {
  event.preventDefault();

  const button = event.target.querySelector('#submit-btn');

  let topUpAmt = parseFloat(document.getElementById('input-amount').value);
  let withdrawAmt = parseFloat(document.getElementById('withdrawal-amount').value);
  
  if (document.getElementById("input-amount").value.length != 0){
    button.setAttribute('disabled', true);
    await dbank.inc(topUpAmt);
    let currenetValue = await dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currenetValue * 100) / 100;
    document.getElementById("input-amount").value = " ";
    button.removeAttribute('disabled');
  }

  if (document.getElementById("withdrawal-amount").value.length != 0){
    button.setAttribute('disabled', true);
    await dbank.dec(withdrawAmt);
    let currenetValue = await dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currenetValue * 100) / 100;
    document.getElementById("withdrawal-amount").value = " ";
    button.removeAttribute('disabled');
  }
  

})