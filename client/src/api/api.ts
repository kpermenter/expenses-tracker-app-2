// @ts-ignore
export const createNewExpense = (body) => {
  const myHeaders = new Headers();
  myHeaders.append("me123", "PMAK-62e1578f714adf23f6bcac9c-8cd4cbaf8fac44f761a423f917476fe01b");
  myHeaders.append("Content-Type", "text/plain");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body,
    redirect: 'follow'
  };

  // @ts-ignore
  fetch("/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}