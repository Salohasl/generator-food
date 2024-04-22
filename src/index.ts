import arrFood from './foodArray';
import './styles1.scss';
/*Выбор данных из массива объектов*/

const textMan: Element = document.querySelector('.text');
const Btn: any = document.querySelector('button');
const loading: HTMLElement = document.getElementById('loading');
    
  Btn.addEventListener('click', function random(){
    loading.style.display = 'block';

    let interval = setInterval(() => {
       //генерация выбора
      let randomArr = arrFood[Math.floor(Math.random()*arrFood.length)];

      //вывод на экран текста
      textMan.textContent = randomArr.name;

      //Вывод на экран изображения
      const img: HTMLImageElement = document.createElement('img');
      img.src = randomArr.src;
      textMan.append(img);

      //Убираем загрузку
      loading.style.display = 'none';

      //остановка интервала
      clearInterval(interval);
    }, 1000);
    Btn.removeEventListener('click', random);
  }); 