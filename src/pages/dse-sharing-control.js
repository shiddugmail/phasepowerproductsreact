import ProductDseTempleteMedium from "../templates/product-templete-dse";
import { SharingModules } from '../data/products'
function SharingControl() {
    return (
        <>
            <ProductDseTempleteMedium data = {SharingModules}/>
        </>
    )
}

export default SharingControl;