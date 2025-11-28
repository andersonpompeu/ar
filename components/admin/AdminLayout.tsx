import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { supabase } from '../../services/supabase';
import {
    LayoutDashboard,
    Package,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';

const AdminLayout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            if (!supabase) return;

            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate('/admin/login');
            }
        };

        checkAuth();
    }, [navigate]);

    const handleLogout = async () => {
        if (supabase) {
            await supabase.auth.signOut();
            navigate('/admin/login');
        }
    };

    const menuItems = [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/products', icon: Package, label: 'Produtos' },
        { path: '/admin/settings', icon: Settings, label: 'Configurações' },
    ];

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex">
            {/* Sidebar */}
            <aside
                className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0
        `}
            >
                <div className="h-full flex flex-col">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-primary">Admin Panel</h2>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden text-slate-500 hover:text-slate-700"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex-1 p-4 space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${isActive
                                            ? 'bg-primary text-white'
                                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                        }
                  `}
                                >
                                    <Icon size={20} />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                        <button
                            onClick={handleLogout}
                            className="flex items-center space-x-3 px-4 py-3 w-full text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                            <LogOut size={20} />
                            <span>Sair</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="bg-white dark:bg-slate-800 shadow-sm p-4 lg:hidden">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-slate-500 hover:text-slate-700"
                    >
                        <Menu size={24} />
                    </button>
                </header>

                <main className="flex-1 p-6 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
