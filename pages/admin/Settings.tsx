import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const Settings: React.FC = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Configurações</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Gerencie as configurações do sistema</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Configurações do Sistema</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center flex-col py-12">
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-4">
                            <SettingsIcon size={48} className="text-slate-400 dark:text-slate-500" />
                        </div>
                        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Em Desenvolvimento
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-center max-w-md">
                            Esta página está sendo desenvolvida. Em breve você poderá gerenciar configurações do sistema, perfil de usuário e preferências.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Settings;
