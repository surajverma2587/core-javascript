const fullName = "Bob Smith";

const fullNameArray = fullName.split(" ");
console.log(fullNameArray);

fullNameArray.splice(1, 0, "Alan");
console.log(fullNameArray);

const fullNameWithMiddleName = fullNameArray.join(" ");
console.log(fullNameWithMiddleName);

const hasSmith = fullName.includes("Smith");
console.log(hasSmith);
console.log(fullName.includes("smith"));

const upperCaseFullName = fullName.toUpperCase();
console.log(upperCaseFullName);

const lowerCaseFullName = fullName.toLowerCase();
console.log(lowerCaseFullName);

const letters = "abcabcabc";

const bReplaced = letters.replace("b", "B");
console.log(bReplaced);

const bReplacedAll = letters.replaceAll("b", "B");
console.log(bReplacedAll);

const employeeId = "GB-98765";

const idNumbers = employeeId.slice(3);
console.log(idNumbers);

const countryCode = employeeId.slice(0, 2);
console.log(countryCode);
