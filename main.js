console.log('------------------- #1 -------------------')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {

  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
}

console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false

console.log(isValidEmail('ao+f-ij._oir%g4543827@example.com')) // Повинно вивести: true
console.log(isValidEmail('popoopopo-popopopo.com'))       // Повинно вивести: false

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

console.log('------------------- #2 -------------------')

function isValidUrl(url) {
  
  return /^(https?):\/\/(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9._%+-]*)*$/.test(url)
}

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false
console.log(isValidUrl('ftp://example.com'));       // Повинно вивести: false           
console.log(isValidUrl('http://www.example.com/path/to/resource')); // Повинно вивести: true

// Експорт функції для використання та тестування
// export { isValidEmail, isValidUrl }
