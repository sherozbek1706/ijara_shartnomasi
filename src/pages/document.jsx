import { Fragment, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import { formatmoney } from "../utils/formatMoney";

export const Document = () => {
  const { firstName, lastName, series, sum, month } = useContext(ThemeContext);
  const [payment, setPayment] = useState([]);
  useEffect(() => {
    console.log(sum);
    let arr = [];
    let pay = ((sum * 1.4) / month).toFixed(0);
    for (let i = 1; i <= month; i++) {
      let obb = {
        money: pay,
        number: i,
      };
      arr.push(obb);
    }
    setPayment((prev) => (prev = arr));
  }, []);

  return (
    <Fragment>
      <div className="Document">
        <h2>
          IJARA SHARTNOMASI <i>{series}</i>
        </h2>
        <p>
          Assalomu Alaykum biz <b>Yakkabog' CITY</b> kompaniyasi, siz{" "}
          <b>
            {firstName} {lastName}
          </b>{" "}
          ni ko'rib turganimizdan xursandmiz.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum assumenda
          ex repellat, impedit, tempora fugiat expedita sunt commodi libero id
          nihil excepturi fuga debitis aliquam eaque? Dignissimos, suscipit
          beatae. Illo, obcaecati! Eos voluptatibus debitis qui facere, deleniti
          in fugit ex modi delectus sint reiciendis magnam, quasi ducimus, totam
          quam provident.
        </p>
        <p>
          <i>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
            obcaecati. A, corporis. Amet quidem voluptatem ullam tenetur, quas
            minus voluptas itaque, distinctio voluptate atque quasi ipsam
            suscipit velit, earum doloremque sequi nulla repellat sit nemo? Cum
            veritatis assumenda alias soluta est eos, corporis quae, quidem amet
            veniam, nobis dolor saepe facilis quasi delectus accusantium!
            Inventore veritatis quis, expedita quae quasi obcaecati consectetur
            velit totam veniam recusandae, incidunt id dolore impedit molestias
            facilis adipisci natus. Impedit provident id blanditiis? Similique,
            quo nesciunt dolorem praesentium voluptas eligendi exercitationem
            porro, nam maxime rem recusandae, possimus aut magni laboriosam
            neque maiores velit officia eos?
          </i>
        </p>
      </div>
      <div className="ProductTable">
        <table className="listTable">
          <tr>
            <th>Mavsumiy oy</th>
            <th>To'lov qilinishi kerak</th>
            <th>IMZO</th>
          </tr>
          {payment.map((elem) => (
            <tr>
              <td>{elem.number}</td>
              <td>{formatmoney(elem.money)}</td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>
    </Fragment>
  );
};
