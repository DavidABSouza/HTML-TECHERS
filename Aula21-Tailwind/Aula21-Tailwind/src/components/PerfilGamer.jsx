import React from "react";
import Peak from '/src/assets/PEAK.jpg'
import DeRoGa from '/src/assets/DRG.png'
import HoKnSi from '/src/assets/HoKnSi.png'
import Detroit from '/src/assets/Detroit.png'
import Undertale from '/src/assets/Undertale.png'



import {UserPlus, MessageSquare, Trophy, Clock, Gamepad2} from 'lucide-react'

const jogos = [
    
    {id: 1, titulo:'Peak', horas:'88h', capa: Peak},
    {id: 2, titulo:'Deep Rock Galactic', horas:'21h', capa: DeRoGa},
    {id: 3, titulo:'Hollow Knight: Silksong', horas:'270h', capa: HoKnSi},
    {id: 4, titulo:'Detroit: Become Human', horas:'435h', capa: Detroit},
    {id: 5, titulo:'Undertale', horas:'1225h', capa: Undertale}
]

export default function PerfilGamer(){
    return (
        <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* 1. BANNER */}
            <div className="h-40 w-full bg-slate-800 animate-pulse">
                <img src="https://pbs.twimg.com/media/DwJ2QXWWkAIqsCE.jpg" alt="Banner" className="w-full h-full object-cover opacity-60"/>
            </div>
            {/* 2. CONTEÚDO PRINCIPAL DO CARD */}
            <div className="p-6 relative">
                {/* CABEÇALHO (Avatar sobreposto e botões) */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 mb-6 justify-items-stretch flex items-stretch">
                    <img src="https://i.pinimg.com/474x/d4/04/db/d404db1af7f04707c291391b4d138926.jpg" alt="" className="w-25 h-25 flex flex-col border border-slate-800 rounded-full shadow-xl/30 animate-spin"/>
                    <div>
                        <h1 className="text-white font-bold text-2xl">Susie Gaster</h1>
                        <h2 className="text-pink-300 font-bold bg-yellow-100 border rounded-xl">Lvl 1225 | O Maioral</h2>
                    </div>
                    <div className="align-items-right">
                        <button type="button" className="text-white font-bold border rounded-xl bg-pink-300 cursor-pointer">+ Adicionar</button>
                        <button type="button" className="text-white font-bold border rounded-xl bg-pink-200 cursor-pointer">Mensagem</button>
                    </div>

                </div>

            </div>
        </div>
    )
}