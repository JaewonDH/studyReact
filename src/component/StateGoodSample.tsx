import { useState } from "react";

interface CheckBoxLabelProps {
  stocked: number;
  serach?: string;
  changeEvent: Function;
  inputEvnet: Function;
}

interface ShopTableProps {
  list: Array<Product>;
  checkValue: number;
  inputValue: string;
}

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

const productList: Product[] = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const CheckboxLabel = (props: CheckBoxLabelProps) => {
  return (
    <div className="CheckboxLabel">
      <input
        type="text"
        value={props.serach}
        onChange={(event) => {
          props.inputEvnet(event.target.value);
        }}
      ></input>
      <input
        type="checkbox"
        value={props.stocked}
        onChange={(event) => {
          props.changeEvent(event.target.checked);
        }}
      ></input>
      <span> Only show products in stock</span>
    </div>
  );
};

const ShopTable = (props: ShopTableProps) => {
  let list = props.list.map((item, index) => {
    if (props.checkValue && !item.stocked) {
      return "";
    }

    if (
      item.name.toUpperCase().indexOf(props.inputValue.toUpperCase()) === -1
    ) {
      return "";
    }
    return (
      <tr key={index}>
        <th>{item.name}</th>
        <th>{item.price}</th>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

const GoodSample = () => {
  // ????????? ?????????????????? useState ???????????? ?????? ??????????????? ????????? ????????????
  // ???????????? ???????????? ??? ?????? setStocked ???????????? ???????????? ?????? ??? ??????
  // ?????? ??????????????? ????????? ????????? ?????? ???????????? ?????????????????? ?????????.
  let [stocked, setStocked] = useState<number>(0);
  let [search, setSearch] = useState<string>("");

  const checkboxEvent = (checkValue: number) => {
    setStocked(checkValue);
  };

  const inputEvnet = (inputValue: string) => {
    setSearch(inputValue);
  };

  return (
    <>
      <CheckboxLabel
        stocked={stocked}
        changeEvent={checkboxEvent}
        inputEvnet={inputEvnet}
      ></CheckboxLabel>
      <ShopTable
        list={productList}
        checkValue={stocked}
        inputValue={search}
      ></ShopTable>
    </>
  );
};

export default GoodSample;
