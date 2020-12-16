import React, { FormEvent, ChangeEvent, useReducer } from "react";
import axios from "axios";
import { FromAddProduct } from "./formAddProduct/FromAddProduct";
export interface IProductDatabase {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  date: string;
  _id: string;
  category: string;
}

export interface IProductFrom {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  category: string;
}

export class Product {
  name: string = "";
  price: string = "";
  description: string = "";
  imageUrl: string = "";
  category: string = "";
}
export function Admin() {
  let formDefaultValue: IProductFrom = {
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    category: "",
  };

  const [formDataProduct, setformDataProduct] = useReducer(
    (state: IProductFrom, newstate: IProductFrom) => ({
      ...state,
      ...newstate,
    }),
    formDefaultValue
  );
  function saveInfo(e: FormEvent) {
    //console.log(e, "hej");
    e.preventDefault();
  }
  function formValues(e: ChangeEvent<any>) {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(value, name);
    setformDataProduct({ [name]: value } as any);
  }

  function postFormValues() {
    axios.post("http://localhost:8888/", p).then((response) => {
      console.log(response.data);
    });
  }

  let p = new Product();

  function category(text: string) {
    console.log(text);
    p.name = formDataProduct.name;
    p.description = formDataProduct.description;
    p.category = text;
    p.imageUrl = formDataProduct.imageUrl;
    p.price = formDataProduct.price;
  }

  return (
    <div>
      <FromAddProduct
        saveInfo={saveInfo}
        postFormValues={postFormValues}
        formValues={formValues}
        category={category}
        formDataProduct={formDataProduct}
      />
    </div>
  );
}
