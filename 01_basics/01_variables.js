const accountId = 144553
let accountEmail = "deepraj26google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

accountEmail = "hc@hc.com"
accountPassword = "121212"
accountCity = "Indore"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);