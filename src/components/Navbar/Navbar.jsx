import { Link, useLocation } from "react-router-dom";
import { Home, HelpCircle, Info } from "lucide-react";

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/", icon: Home },
        { name: "FAQ", path: "/faq", icon: HelpCircle },
        { name: "About", path: "/about", icon: Info },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-linear-to-br from-indigo-500/15 via-purple-500/15 to-pink-500/15 border-b border-white/10 shadow-[0_8px_30px_rgba(99,102,241,0.15)]">

            {/* Inner Container */}
            <div className="flex items-center justify-between px-8 py-4">

                {/* 🔹 Logo */}
                <Link to="/" className="flex items-center gap-3 cursor-pointer">

                    <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
                        🗳️
                    </div>

                    <span className="text-lg font-bold bg-linear-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
                        CiviQ
                    </span>

                </Link>

                {/* 🔹 Nav Links */}
                <div className="flex items-center gap-6">
                    {navItems.map((item, i) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={i}
                                to={item.path}
                                className={`relative flex items-center gap-2 text-sm px-3 py-2 transition-all duration-300 ${isActive
                                    ? "text-white"
                                    : "hover:text-grey-500"
                                    }`}
                            >
                                <Icon size={16} />
                                {item.name}

                                {/* 🔥 Underline */}
                                <span
                                    className={`absolute left-0 bottom-0 h-0.5 w-full bg-linear-to-r from-indigo-400 to-pink-400 rounded-full transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                        }`}
                                ></span>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </nav>
    );
}