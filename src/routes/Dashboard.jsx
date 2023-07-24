import Header from "../components/header"
import Footer from "../components/Footer"
import NavDash from "../pages-dash/NavDash"
import AddProduct from "../pages-dash/AddProduct"

export default function Dashboard(){
    return (
        <div>


            <NavDash />
            <AddProduct />

            <Footer />
        </div>
    )
}