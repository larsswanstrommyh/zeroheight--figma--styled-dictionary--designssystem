import Button from "../Button/Button";
import Pill from "../Pill/Pill";
import Style from "./Card.module.scss";

export const Card = ({ children }: any) => {
  return (
    <div className={Style.card}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--myh-spacing-medium)",
          color: "var(--myh-color-brand-secondary)",
        }}
      >
        <Pill>Magni</Pill>
        <div>Nemo enim ipsam voluptatem</div>
      </div>

      <h2 className={Style.title}>
        Ut enim ad minima veniam, quis nostrum exercitationem
      </h2>
      <p className={Style.preamble}>
        inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
      <br />
      <Button variant="feature">Explicabo</Button>
    </div>
  );
};
