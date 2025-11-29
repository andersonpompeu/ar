import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Configurações</h1>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-center flex-col py-12">
                    <SettingsIcon size={64} className="text-slate-300 dark:text-slate-600 mb-4" />
                    <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Configurações em Desenvolvimento
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-center max-w-md">
                        Esta página está sendo desenvolvida. Em breve você poderá gerenciar configurações do sistema, perfil de usuário e preferências.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Settings;
