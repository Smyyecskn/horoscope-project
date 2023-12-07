import StyledMain from "./main.module.scss";

const Main = ({ data }) => {
  return (
    <div className={StyledMain.main}>
      {data.map(({ id, title, date, image, desc }) => (
        <div key={id} className={StyledMain.card}>
          <img width="550px" src={image} alt="img" />
          <h2>{title}</h2>

          <p>{date}</p>

          <h6>{desc}</h6>
        </div>
      ))}
    </div>
  );
};

export default Main;
