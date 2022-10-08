var daysOfWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']; 
var maleAkanNames = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", ];
var femaleAkanNames = [ "Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama", ];

var dateInput =prompt("Enter date of birth");

var birthDates = new Date(dateInput);

var dateYenyewe = birthDate.getDay();

var genderFemal = femaleName(dateYenyewe);
var genderMale = maleNames(dateYenyewe);