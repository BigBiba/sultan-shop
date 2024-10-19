export default function Header() {
    return (
        <header>
            <div>
                <div className="address"></div>
                <div className="mail"></div>
                <ul>
                    <li>О компании</li>
                    <li>Доставка и оплата</li>
                    <li>Возврат</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div>
                <link className="logo"></link>
                <button className="catalog"></button>
                <input className="search"></input>
                <div className="phone"></div>
                <button className="price-list"></button>
                <div className="basket"></div>
            </div>
        </header>
    )
}