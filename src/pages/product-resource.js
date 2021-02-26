import ProductTemplate from "./product-template";
import { SmartResource } from '../data/products'
function ProductResource() {
    return  (
        <>
            <ProductTemplate data = { SmartResource }/>
        </>
    )
}

export default ProductResource;