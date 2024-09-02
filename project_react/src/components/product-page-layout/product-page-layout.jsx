import { Cart } from "../cart/cart"
import { ProductList } from "../product-list/product-list"
import "./styles.css"

export const LayoutComponente = () =>{
    return (
        <main className="product-page-layout">
            <section className="">
                <ProductList />{}
            </section>
            <section>
                <Cart />
            </section>
        </main>
    )
}