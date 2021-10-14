import { categories } from '../../data';
import { Link } from 'react-router-dom';
import "./Categories.css"

const categoryItem = (item) => (
    <div className="category-item col-6 col-sm-4 col-lg-3 px-2 py-4">
        <img src={item.image} alt="" className="category-img" />
        <div className="category-name">
            <Link to={`/shop/${item.name.toLowerCase()}`}>
                <button className="category-btn">{item.name}</button>
            </Link>
        </div>
    </div>
)

const Categories = () => {
    return (
        <div className="container">
            <div className="title text-center">
                <h2 className="position-relative d-inline-block">
                    Top Categories
                </h2>
            </div>
            <div className="row">
                {
                    categories.map((item) => (
                        categoryItem(item)
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
