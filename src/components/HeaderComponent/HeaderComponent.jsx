import { NavWrapper, NavLinks, NavLink } from "./style";
import { useLocation } from "react-router-dom";

const HeaderComponent = () => {
    const location = useLocation();

    return (
        <NavWrapper>
            <NavLink to="/" className={location.pathname === "/"}>🧠 Khóa học</NavLink>
            <NavLinks>
                <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
                    Trang chủ
                </NavLink>
                <NavLink to="/favorites" className={location.pathname === "/favorites" ? "active" : ""}>
                    Yêu thích
                </NavLink>
                <NavLink to="/history" className={location.pathname === "/history" ? "active" : ""}>
                    Lịch sử xem
                </NavLink>
            </NavLinks>
        </NavWrapper>
    );
};

export default HeaderComponent;
