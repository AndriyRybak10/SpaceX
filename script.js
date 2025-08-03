console.clear()
function changeLanguageUa() {
   let uaTexts = [
      "Фалкон 9", "Фалкон Хеві", "Дрегон", "Оновлення", "Про нас", "Галерея", "Магазин",
      "Фалкон Хеві", "Найпотужніша діюча ракета у світі вдвічі потужніша за найближчу",
      "Фалкон Хеві Огляд", "ВИСОТА", "ДІАМЕТР", "МАСА", "ВАНТАЖ ДО НОЗ", "ВАНТАЖ ДО ПОГ",
      "ВАНТАЖ ДО МАРСА", "12.2 м / 229.6 фт", "70 м / 39.9 фт", "1,420,788 кг / 3,125,735 фн",
      "63,800 кг / 140,660 фн", "26,700 кг / 58,860 фн", "16,800 кг / 37,040 фн", "НЕЗРІВНЯННА ПРОДУКТИВНІСТЬ",
      "З більш ніж 5 мільйонами фунтів тяги при зльоті, Фалкон Хеві є найпотужнішою ракетою, що літає. Для порівняння, злітна тяга Фалкон Хеві дорівнює приблизно вісімнадцяти Боінг 747 на повній потужності. Фалкон Хеві може вивести на орбіту вантаж, еквівалентний повністю завантаженому Боінг 737 з пасажирами, багажем та паливом.",
      "Твіттер", "Ютуб", "Інстаграм", "Флікр", "ЛінкедІн", "Конфіденційність", "Політика",
      "З додатковими питаннями звертайтесь: rideshare@spacex.com"
   ];

   let targets = document.querySelectorAll(".target");
   console.log(targets)
   for (let i = 0; i < targets.length && i < uaTexts.length; i++) {
      targets[i].textContent = uaTexts[i];
   }
}
function changeLanguageEng() {
   let engTexts = [
      "Falcon 9", "Falcon Heavy", "Dragon", "Updates", "About", "Gallery", "Shop", "Falcon Heavy",
      "The most powerful operational rocket in the world by a factor of two", "Falcon Heavy Overview", "HEIGHT", "DIAMETER",
      "MASS", "PAYLOAD TO LEO", "PAYLOAD TO GTO", "PAYLOAD TO MARS", "12.2 m / 229.6 ft", "70 m / 39.9 ft", "1,420,788 kg / 3,125,735 lb", "63,800 kg / 140,660 lb",
      "26,700 kg / 58,860 lb", "16,800 kg / 37,040 lb", "UNMATCHED PERFORMANCE",
      "With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the mostcapable rocket flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner complete with passengers, luggage and fuel to orbit.",
      "Twitter", "Youtube", "Instagram", "Flickr", "LinkedIn", "Privacy", "Policy", "For additional questions, contact rideshare@spacex.com",
      "Contact us"
   ];
   let targets = document.querySelectorAll(".target");
   console.log(targets)
   for (let i = 0; i < targets.length && i < engTexts.length; i++) {
      targets[i].textContent = engTexts[i];
   }
}

const s = document.querySelector(".sec")
const m = document.querySelector(".min")
const h = document.querySelector(".hour")

setInterval(() => {
   const now = new Date()
   const sec = now.getSeconds()
   const min = now.getMinutes()
   const hs = now.getHours()
   s.style.transform = `rotate(${sec * 6}deg)`
   m.style.transform = `rotate(${min * 6 + sec * 0.1}deg)`
   h.style.transform = `rotate(${hs * 30 + min * 0.5}deg)`
}, 1000)


document.addEventListener("DOMContentLoaded", () => {

   let loader = document.querySelector(".loader");
   let container = document.querySelector(".conteiner");

   setTimeout(() => {
      loader.style.opacity = "0";
      container.style.opacity = "1";
      
   }, 1000);
});