import Page from "./pages/Page";
import mur from "./img/murzilka.jpg";
import kuz from "./img/kyz.jpg";
import dog from "./img/Dog.jpg";
function App() {
  return (
    <div className="App">
      <Page
        name="Мурзилка"
        info="Первая наша кошка. Царица дома. Главный хишник"
        url={mur}
      />
      <Page
        name="Кузьмич"
        info="Второй кот. Очень общительный и добрый"
        url={kuz}
      />
      <Page
        name="Тобик"
        info="Приблудился щенком. Очень добрый и любвообильный"
        url={dog}
      />
    </div>
  );
}

export default App;
