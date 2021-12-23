import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();

    const currentUrl = location.pathname;

    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/5 bg-orange-400 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-gray-800 ">
                    CRM-Clients
                </h2>
                <nav className="mt-10">
                    <Link
                        to="/clients"
                        className={`${
                            currentUrl === "/clients"
                                ? "text-gray-100"
                                : "text-gray-800"
                        } text-2xl block mt-2 hover:text-gray-100 `}
                    >
                        Clients
                    </Link>
                    <Link
                        to="/clients/new"
                        className={`${
                            currentUrl === "/clients/new"
                                ? "text-gray-100"
                                : "text-gray-800"
                        } text-2xl block mt-2 hover:text-gray-100 `}
                    >
                        New Clients
                    </Link>
                </nav>
            </div>
            <div className="md:w-4/5">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
