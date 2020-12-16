import React, { FormEvent, ChangeEvent, useReducer } from "react";

export interface IProductFrom {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface IpropsProduct {
  formValues(e: ChangeEvent<any>): void;
  saveInfo(e: FormEvent): void;
  postFormValues(): void;
  category(text: string): void;
  formDataProduct: IProductFrom;
}

export function FromAddProduct({
  saveInfo,
  postFormValues,
  formValues,
  formDataProduct,
  category,
}: IpropsProduct) {
  return (
    <form onSubmit={saveInfo}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formDataProduct.name}
        onChange={formValues}
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        value={formDataProduct.price}
        onChange={formValues}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={formDataProduct.description}
        onChange={formValues}
      />

      <input
        type="text"
        name="imageUrl"
        placeholder="imageUrl"
        value={formDataProduct.imageUrl}
        onChange={formValues}
      />
      <div>
        <h5>Kategorier</h5>
        <button
          type="submit"
          name="smycken"
          onClick={() => {
            category("smycken");
          }}
        >
          smycken
        </button>

        <button
          type="submit"
          name="tröja"
          onClick={() => {
            category("tröja");
          }}
        >
          tröja
        </button>
      </div>

      <button type="submit" onClick={() => postFormValues()}>
        post
      </button>
    </form>
  );
}
