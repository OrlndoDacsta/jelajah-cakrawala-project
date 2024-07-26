import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children }) => {
    const userInfo = useSelector((state) => state.user.userInfo);
    if(!userInfo) {
        return <Navigate to="/login" />
    }

    return <>{children || <Outlet />}</>;

};

export default ProtectedRoute;
