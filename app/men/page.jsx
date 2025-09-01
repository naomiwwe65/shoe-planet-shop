import React from "react";
import { Navbar6 } from "../../men/components/navbar-06";
import { ProductHeader1 } from "../../men/components/product-header-01";
import { Product6 } from "../../men/components/product-06";
import { Faq2 } from "../../men/components/faq-02";
import { Footer1 } from "../../men/components/footer-01";

export default function MenPage() {
  return (
    <div>
      <Navbar6 />
      <ProductHeader1 />
      <Product6 />
      <Faq2 />
      <Footer1 />
    </div>
  );
}
