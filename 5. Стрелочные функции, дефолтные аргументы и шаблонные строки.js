//Задание 1

//Напишите функцию sayHello(name, surname, age, greeting), которая принимает в качестве аргументов имя, фамилию, возраст и приветствие. 
//Каждый аргумент должен иметь дефолтное значение, функция должна быть стрелочной и не иметь ключевого слова return.

// const sayHello = (name, surname, age, greeting) => `${greeting} ${name} ${surname}, вам ${age} лет`

// alert( sayHello('Иван', 'Иванов', 10, 'Здравствуйте, ') )
// alert( sayHello('Дима', 'Иванов', 10, 'Здравствуйте, ') )
// alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') )



// ИИИИИИИИИИИИИЛЛЛЛЛЛЛЛЛИИИИИИИИ

// const sayHello = (
// 	name = 'Иван',
//   surname = 'Иванов',
//   age = 10,
//   greeting = 'Привет, ',
//  ) => (
//  	greeting + name + ' ' + surname + ', тебе ' + age + ' лет.'
// )

// alert( sayHello() );
// alert( sayHello('Дима') );
// alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );



