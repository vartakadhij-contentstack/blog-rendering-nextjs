import Footer from "./Footer"
import Navigation from "./Navigation"

const Layout = (props) =>{
    return(
        <div>
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;