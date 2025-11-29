import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import { Package, Users, DollarSign, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState({
        productsCount: 0,
        totalValue: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            if (!supabase) return;

            const { count } = await supabase
                .from('products')
                .select('*', { count: 'exact', head: true });

            setStats({
                productsCount: count || 0,
                totalValue: 0,
            });
        };

        fetchStats();
    }, []);

    const statCards = [
        {
            title: 'Total de Produtos',
            value: stats.productsCount,
            icon: Package,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100 dark:bg-blue-900/20',
        },
        {
            title: 'Vendas (Mês)',
            value: 'R$ 0,00',
            icon: DollarSign,
            color: 'text-green-600',
            bgColor: 'bg-green-100 dark:bg-green-900/20',
        },
        {
            title: 'Visitantes',
            value: '0',
            icon: Users,
            color: 'text-purple-600',
            bgColor: 'bg-purple-100 dark:bg-purple-900/20',
        },
        {
            title: 'Crescimento',
            value: '+0%',
            icon: TrendingUp,
            color: 'text-orange-600',
            bgColor: 'bg-orange-100 dark:bg-orange-900/20',
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Visão geral do sistema</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                    {stat.title}
                                </CardTitle>
                                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                                    <Icon className={`h-5 w-5 ${stat.color}`} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Atividade Recente</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-500 dark:text-slate-400">Nenhuma atividade recente para mostrar.</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
