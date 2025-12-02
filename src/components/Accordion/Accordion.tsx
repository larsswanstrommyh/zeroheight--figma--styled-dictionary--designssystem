import Style from "./Accordion.module.scss";

export const Accordion = ({ children }: any) => {
  return (
    <div className={Style.accordion}>
      <div className={Style.titleRow}>
        <h2 className={Style.title}>
          Ut enim ad minima veniam, quis nostrum exercitationem
        </h2>
        <div className={Style.ball}></div>
      </div>
      <div className={Style.content}>{children}</div>
    </div>
  );
};
