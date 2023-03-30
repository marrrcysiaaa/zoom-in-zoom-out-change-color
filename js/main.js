// 1. Pobieramy przycisk który bedzie służył do powiekszanie tekstu (+)
// 2. Pobieramy przycisk do pomiejszania (-)
// 3. Pobieramy przycisk do losowej zmiany koloru tekstu
// 4. Pobieramy tekst <p>

const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36

const increase = () => {
	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}

const decrease = () => {
	if (fontSize <= 21)return
	fontSize -= 5
	p.style.fontSize = fontSize + 'px'
}

const colorChanger = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    p.style.color = `rgb(${r},${g},${b})`
}


sizeDown.addEventListener('click', decrease)
sizeUp.addEventListener('click', increase)
colorBtn.addEventListener("click", colorChanger)

// Tworzymy funkcję (increase) w ktorej operatorem przypisania (+=) bedziemy powiekszać tekst o 5px, tworzymy rownież nowa zmienna let ktora bedzie przetrzymywała wyjściową wielkość czcionki. 
// ( ...= fontSize + "px"; uzywamy takiego zapisu ponieważ zmienna let = 36, nie jest podane co to za wartość, więc tym sposobem zadeklarowalismy ze są to piksele.
// Analogicznie tworzymy funkcje (decrease) używajac przeciwnych znakow. Dodatkowo tworzymy jeszcze if'a który zakonczy dzialanie funkcji (return) kiedy wielkosc czcionki bedzie równa lub mniejsza niż 21 px.

// Tworzymy zmienną która będzie za każdym kliknięciem generować losowy kolor. W tym celu tworzymy trzy zmienne r,g,b (paleta rgb, kazda zmienna odpowiada jednemu kolorowi), aby za kazdym kliknieciemtworzyc randomową liczbę używamy obiektu Math do tworzenia randomowych liczb bezprzecinkowych:
//  Math.floor(Math.random() * 255) 255 to maksymalna mozliwa liczba odpowiadajaca za kolor w palecie rgb
// Kolejnym krokiem jest przypisanie w js styli do paragrafu używając `` i ${zmienna}

// Funkcje wywołujemy na "click" za pomocą addEvenListener