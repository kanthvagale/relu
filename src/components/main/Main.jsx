import AsideLeft from "../asideLeft/AsideLeft";
import AsideRight from "../asideRight/AsideRight";
import Cards from "../cards/Cards";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <aside className="left">
        <AsideLeft />
      </aside>
      <section className="main-section">
        <div>
          <Cards />
        </div>
      </section>
      <aside className="right">
        <AsideRight />
      </aside>
    </div>
  );
};

export default Main;
