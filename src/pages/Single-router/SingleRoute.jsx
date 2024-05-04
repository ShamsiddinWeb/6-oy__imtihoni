import React, { useEffect, useState } from "react";
import "./singleRoute.css";
import { useParams } from "react-router-dom";
import axios from "../../api";
import Loading from "./Loading";
import yulduz from "../../assets/icon/yulduz.svg";
import { IoCartOutline } from "react-icons/io5";
import category1 from "../../assets/icon/category1.svg";
import category2 from "../../assets/icon/category2.svg";
import category3 from "../../assets/icon/category3.svg";
import category4 from "../../assets/icon/category4.svg";
import category5 from "../../assets/icon/category5.svg";
import eeee from "../../assets/images/eeee.png";
import thumbnail1 from "../../assets/images/thumbnail1.png";
import thumbnail2 from "../../assets/images/thumbnail2.png";
import thumbnail3 from "../../assets/images/thumbnail3.png";
import yulduzz from "../../assets/icon/yulduz.svg";

const SingleRoute = () => {
  const { id } = useParams();
  const [data, setProduct] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, []);
  return (
    <div className="singleRoute ">
      <div className="productsSingle">
        <div className="container">
          {loading ? <Loading /> : <></>}
          <div className="singleRoute__wrapper">
            <div className="singleRoute__card">
              <div className="divvv">
                <img
                  className="singleRoute__card-img"
                  src={data?.image}
                  a
                  lt=""
                />
                <div className="singleRoute__card-group">
                  <button className="singleRoute__card-btn">Sale Off</button>
                  <h2 className="singleRoute__card-title">{data?.title}</h2>
                  <div>
                    <img src={yulduz} alt="" />
                    <span>({data?.rating.count} reviews)</span>
                  </div>
                  <p className="singleRoute__card-price">${data?.price}</p>
                  <p className="singleRoute__card-text">{data?.description}</p>
                  <div className="size">
                    <p>Size / Weight:</p>
                    <span>50g</span>
                    <span>60g</span>
                    <span>80g</span>
                    <span>100g</span>
                    <span>150g</span>
                  </div>
                  <div className="input">
                    <input type="number" placeholder="1" />
                    <button className="input__btn">
                      <IoCartOutline /> Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="singleRoute__card-end">
                <img
                  className="singleRoute__card-end-img"
                  src={data?.image}
                  alt=""
                />
                <img
                  className="singleRoute__card-end-img"
                  src={data?.image}
                  alt=""
                />
                <img
                  className="singleRoute__card-end-img"
                  src={data?.image}
                  alt=""
                />
                <img
                  className="singleRoute__card-end-img"
                  src={data?.image}
                  alt=""
                />
                <div>
                  <p>
                    Type: <span>Organic</span>
                  </p>
                  <p>
                    MFG: <span> Jun 4.2022</span>
                  </p>
                  <p>
                    LIFE: <span>70 days</span>
                  </p>
                </div>
                <div>
                  <p>
                    SKU: <span>FWM15VKT</span>
                  </p>
                  <p>
                    Tags: <span> Snack, Organic, Brown</span>
                  </p>
                  <p>
                    Stock: <span>8 Items In Stock</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="singleRoute__cards">
              <div className="singleRoute__card-groupp">
                <h3 className="singleRoute__cards-title">Category</h3>
                <div className="singleRoute__cards-category">
                  <img
                    className="singleRoute__cards-category-img"
                    src={category1}
                    alt=""
                  />
                  <p className="singleRoute__cards-category-text">
                    Milks & Dairies
                  </p>
                  <p className="singleRoute__cards-category-number">5</p>
                </div>
                <div className="singleRoute__cards-category">
                  <img
                    className="singleRoute__cards-category-img"
                    src={category2}
                    alt=""
                  />
                  <p className="singleRoute__cards-category-text">Clothing</p>
                  <p className="singleRoute__cards-category-number">6</p>
                </div>
                <div className="singleRoute__cards-category">
                  <img
                    className="singleRoute__cards-category-img"
                    src={category3}
                    alt=""
                  />
                  <p className="singleRoute__cards-category-text">Pet Foods</p>
                  <p className="singleRoute__cards-category-number">7</p>
                </div>
                <div className="singleRoute__cards-category">
                  <img
                    className="singleRoute__cards-category-img"
                    src={category4}
                    alt=""
                  />
                  <p className="singleRoute__cards-category-text">
                    Baking material
                  </p>
                  <p className="singleRoute__cards-category-number">12</p>
                </div>
                <div className="singleRoute__cards-category">
                  <img
                    className="singleRoute__cards-category-img"
                    src={category5}
                    alt=""
                  />
                  <p className="singleRoute__cards-category-text">
                    Fresh Fruit
                  </p>
                  <p className="singleRoute__cards-category-number">16</p>
                </div>
              </div>
              <div className="singleRoute__card-groupp">
                <h3 className="singleRoute__cards-title">Fill by price</h3>
                <input className="singleRoute__cards-inp" type="range" />
                <div className="shshsh">
                  <p>
                    From: <span>$500</span>
                  </p>
                  <p>
                    To: <span> $1,000</span>
                  </p>
                </div>
                <p>Color</p>
                <div className="zzz">
                  <input type="checkbox" />
                  <label for="scales">Red (56)</label>
                </div>

                <div className="zzz">
                  <input type="checkbox" />
                  <label for="horns">Green (78)</label>
                </div>

                <div className="zzz">
                  <input type="checkbox" />
                  <label for="horns">Blue (54)</label>
                </div>

                <p>Item Condition</p>
                <div className="zzz">
                  <input type="checkbox" />
                  <label for="scales">New (1506)</label>
                </div>

                <div className="zzz">
                  <input type="checkbox" />
                  <label for="horns">Refurbished (27)</label>
                </div>

                <div className="zzz">
                  <input type="checkbox" />
                  <label for="horns">Used (45)</label>
                </div>
                <div className="div__end">
                  <button>Fillter</button>
                  <img src={eeee} alt="" />
                </div>
              </div>
              <div className="singleRoute__card-groupp">
                <h3 className="singleRoute__cards-title">New products</h3>
                <div className="singleRoute__cards-categoryy">
                  <img
                    className="singleRoute__cards-category-img"
                    src={thumbnail1}
                    alt=""
                  />
                  <p className="singleRoute__cards-category-text">
                    <b className="dddd"> Chen Cardigan</b> <br />
                    <span>$99.50</span> <br />
                    <img src={yulduzz} alt="" />
                  </p>
                </div>
                <div className="singleRoute__cards-categoryy">
                  <img
                    className="singleRoute__cards-category-img"
                    src={thumbnail2}
                    alt=""
                  />
                  <p className="singleRoute__cards-category-text">
                    <b className="dddd"> Chen Sweater</b> <br />
                    <span>$89.50</span> <br />
                    <img src={yulduzz} alt="" />
                  </p>
                </div>
                <div className="singleRoute__cards-categoryy">
                  <img
                    className="singleRoute__cards-category-img"
                    src={thumbnail3}
                    alt=""
                  />
                  <p className="singleRoute__cards-category-text">
                    <b className="dddd"> Colorful Jacket</b> <br />
                    <span>$25</span> <br />
                    <img src={yulduzz} alt="" />
                  </p>
                </div>
              </div>
            </div>
            <div className="single__carsss">
              <button className="single__carsss-btn">Description</button>
              <button className="single__carsss-btn">Description</button>
              <button className="single__carsss-btn">Description</button>
              <button className="single__carsss-btn">Description</button>
              <p className="single__carsss-text">
                Uninhibited carnally hired played in whimpered dear gorilla
                koala depending and much yikes off far quetzal goodness and from
                for grimaced goodness unaccountably and meadowlark near
                unblushingly crucial scallop tightly neurotic hungrily some and
                dear furiously this apart. <br /> Spluttered narrowly yikes left
                moth in yikes bowed this that grizzly much hello on spoon-fed
                that alas rethought much decently richly and wow against the
                frequent fluidly at formidable acceptably flapped besides and
                much circa far over the bucolically hey precarious goldfinch
                mastodon goodness gnashed a jellyfish and one however because.
              </p>

              <div className="lll">
                <ul className="ppp">
                  <li>Type Of Packing</li>
                  <li>Color</li>
                  <li>Quantity Per Case</li>
                  <li>Ethyl Alcohol</li>
                  <li>Piece In One</li>
                </ul>
                <ul>
                  <li>Type Of Packing</li>
                  <li>Color</li>
                  <li>Quantity Per Case</li>
                  <li>Ethyl Alcohol</li>
                  <li>Piece In One</li>
                </ul>
              </div>
              <p className="single__carsss-text">
                Laconic overheard dear woodchuck wow this outrageously taut
                beaver hey hello far meadowlark imitatively egregiously hugged
                that yikes minimally unanimous pouted flirtatiously as beaver
                beheld above forward energetic across this jeepers beneficently
                cockily less a the raucously that magic upheld far so the this
                where crud then below after jeez enchanting drunkenly more much
                wow callously irrespective limpet.
              </p>
              <h3 className="single__carsss-title">Packaging & Delivery</h3>
              <p className="single__carsss-text">
                Less lion goodness that euphemistically robin expeditiously
                bluebird smugly scratched far while thus cackled sheepishly
                rigid after due one assenting regarding censorious while
                occasional or this more crane went more as this less much amid
                overhung anathematic because much held one exuberantly sheep
                goodness so where rat wry well concomitantly. <br />
                Scallop or far crud plain remarkably far by thus far iguana lewd
                precociously and and less rattlesnake contrary caustic wow this
                near alas and next and pled the yikes articulate about as less
                cackled dalmatian in much less well jeering for the thanks
                blindly sentimental whimpered less across objectively fanciful
                grimaced wildly some wow and rose jeepers outgrew lugubrious
                luridly irrationally attractively dachshund.
              </p>
              <h3 className="single__carsss-titlee">Suggested Use</h3>
              <p>Refrigeration not necessary.</p>
              <p>Stir before serving</p>
              <h3 className="single__carsss-titlee">Other Ingredients</h3>
              <p>This butter was produced using a LTG (Low Temperature Grinding) process</p>
              <p>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
              <p>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
              <h3 className="single__carsss-titlee">Warnings</h3>
              <p>Oil separation occurs naturally. May contain pieces of shell.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
