import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../App";
import { formatmoney } from "../utils/formatMoney";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const Document = () => {
  const { firstName, lastName, series, sum, month } = useContext(ThemeContext);
  const [payment, setPayment] = useState([]);
  const pdfRef = useRef();

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

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save(`${firstName + lastName}.pdf`);
    });
  };

  return (
    <Fragment>
      <div ref={pdfRef}>
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
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur nulla eveniet, quia ducimus suscipit culpa sequi
              commodi laudantium quos quibusdam vel nobis at molestiae inventore
              dolore quae pariatur atque porro! Commodi perspiciatis veniam iure
              rerum nisi voluptatum doloribus unde, est voluptas! Vel laboriosam
              sed nesciunt neque recusandae nihil temporibus quam optio
              corrupti. Ex, at nostrum! Corrupti reiciendis quaerat quae illum
              consequatur omnis molestiae velit aliquam voluptates nostrum, ab
              voluptatibus. Molestias, blanditiis laudantium. Qui sapiente
              perferendis voluptate voluptatem quis soluta quas pariatur, est,
              molestias dolor beatae? Reprehenderit obcaecati, fugit,
              accusantium explicabo facere dolorem cupiditate doloremque rem
              dicta esse repudiandae porro delectus magnam perferendis, iusto
              voluptates! Voluptates atque quod aliquid dolor! Sint deserunt
              cupiditate nulla, odio molestiae culpa accusamus ipsam voluptatem
              harum, a aspernatur doloremque. Odit at labore eveniet cumque eos
              possimus amet, alias ipsam voluptates est. Eveniet nulla animi
              laboriosam, veritatis eum dolorem dolorum quibusdam. Natus commodi
              dicta corporis reiciendis inventore asperiores. Porro molestiae,
              consectetur nulla, temporibus repellat possimus provident, nihil
              soluta libero culpa vel consequatur cupiditate a dolores numquam
              fuga corporis! Iusto officiis distinctio illum facilis esse nihil
              itaque accusantium ipsam molestias sunt nam est, quaerat quam
              eligendi saepe dignissimos eum aut libero tenetur hic. Labore enim
              facilis tempore aliquid tenetur nemo ab excepturi id doloremque
              fugiat, saepe ex nobis laudantium debitis cumque perspiciatis
              autem voluptas eveniet laboriosam quos molestiae incidunt quae?
              Fuga eius voluptate at ut quia, ipsum nesciunt dolor illum aliquam
              sunt velit maxime architecto ea vel atque eum voluptas minima non
              dolorem, assumenda ex. Ducimus hic vel consequatur perspiciatis
              veniam quaerat quo voluptatibus, illum doloremque, omnis, eius id.
              Id sapiente nesciunt animi veritatis rerum iure, ratione et, nihil
              aliquam unde labore corrupti perspiciatis hic deserunt! Quae,
              animi officiis eligendi necessitatibus adipisci beatae explicabo
              laudantium voluptate, asperiores cupiditate sint? Inventore cumque
              qui quidem esse libero minima at aliquid, harum adipisci possimus
              recusandae dicta modi quo. Quod a qui sequi quas cumque quos eius
              incidunt, facere quasi. Eius quos repellendus natus unde adipisci
              delectus dolor nesciunt beatae, animi facere, iste fuga doloribus
              consequuntur tempora facilis debitis earum et ab neque
              accusantium? Atque fuga impedit a explicabo sit itaque nihil
              laudantium? Earum tempora eius numquam id nam esse at
              voluptatibus. Minus eveniet accusantium sunt molestiae molestias
              exercitationem perspiciatis nostrum dicta. Magni consequuntur
              ipsam ipsum dolore unde? Necessitatibus adipisci quam, aliquid
              aspernatur voluptatum nesciunt eius, deserunt ipsa itaque ab optio
              similique blanditiis repudiandae debitis a quidem est recusandae,
              facilis enim. Laudantium incidunt sunt enim, delectus, et
              repellendus, accusantium mollitia facere aperiam ea voluptate a
              adipisci ipsum blanditiis ratione atque error culpa neque dolorum.
              Cum, dolorem deserunt officia hic debitis dolore excepturi fugiat
              a alias tempora minima corrupti facere. Asperiores tempora eaque,
              vel veniam cum voluptas? Doloremque eaque reiciendis iste cum
              voluptatem architecto fugiat dolore autem magnam assumenda
              officiis nihil quisquam nesciunt quod incidunt quasi distinctio
              placeat maiores quidem corporis voluptas optio, laborum ratione
              sed! Odit ea, ex quasi nulla ad doloremque quo, odio, rem
              inventore quam laborum neque non. Praesentium tempora ipsam maxime
              asperiores officiis architecto voluptatibus maiores in culpa
              nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eum assumenda ex repellat, impedit, tempora fugiat expedita sunt
              commodi libero id nihil excepturi fuga debitis aliquam eaque?
              Dignissimos, suscipit beatae. Illo, obcaecati! Eos voluptatibus
              debitis qui facere, deleniti in fugit ex modi delectus sint
              reiciendis magnam, quasi ducimus, totam quam provident.
            </p>
            <p>
              <i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, obcaecati. A, corporis. Amet quidem voluptatem ullam
                tenetur, quas minus voluptas itaque, distinctio voluptate atque
                quasi ipsam suscipit velit, earum doloremque sequi nulla
                repellat sit nemo? Cum veritatis assumenda alias soluta est eos,
                corporis quae, quidem amet veniam, nobis dolor saepe facilis
                quasi delectus accusantium! Inventore veritatis quis, expedita
                quae quasi obcaecati consectetur velit totam veniam recusandae,
                incidunt id dolore impedit molestias facilis adipisci natus.
                Impedit provident id blanditiis? Similique, quo nesciunt dolorem
                praesentium voluptas eligendi exercitationem porro, nam maxime
                rem recusandae, possimus aut magni laboriosam neque maiores
                velit officia eos?
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
      </div>
      <button onClick={downloadPDF}>Download PDF</button>
    </Fragment>
  );
};
