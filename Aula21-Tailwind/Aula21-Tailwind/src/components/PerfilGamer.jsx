import React from "react";
import Peak from '/src/assets/PEAK.jpg'
import DeRoGa from '/src/assets/DRG.png'
import HoKnSi from '/src/assets/HoKnSi.png'
import Detroit from '/src/assets/Detroit.png'
import Undertale from '/src/assets/Undertale.png'
import OneShot from '/src/assets/OneShot.png'



import {UserPlus, MessageSquare, Trophy, Clock, Gamepad2} from 'lucide-react'

const jogos = [
    
    {id: 1, titulo:'Peak', horas:'88h', capa: Peak},
    {id: 2, titulo:'Deep Rock Galactic', horas:'21h', capa: DeRoGa},
    {id: 3, titulo:'Hollow Knight: Silksong', horas:'270h', capa: HoKnSi},
    {id: 4, titulo:'Detroit: Become Human', horas:'435h', capa: Detroit},
    {id: 5, titulo:'Undertale', horas:'120h', capa: Undertale},
    {id: 5, titulo:'OneShot', horas:'347h', capa: OneShot}
]

export default function PerfilGamer(){
    return (
        <div className="w-full max-w-3xl bg-slate-900 border border-2 border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* 1. BANNER */}
            <div className="h-40 w-full bg-slate-800 animate-pulse">
                <img src="https://pbs.twimg.com/media/DwJ2QXWWkAIqsCE.jpg" alt="Banner" className="w-full h-full object-cover opacity-60"/>
            </div>
            {/* 2. CONTEÚDO PRINCIPAL DO CARD */}
            <div className="p-6 relative">
                {/* CABEÇALHO (Avatar sobreposto e botões) */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 mb-6 justify-items-stretch flex items-stretch">
                    <img src="https://i.pinimg.com/474x/d4/04/db/d404db1af7f04707c291391b4d138926.jpg" alt="" className="w-25 h-25 flex flex-col border border-slate-800 rounded-full shadow-xl/30 animate-spin transition ease-in-out duration-300 hover:scale-110"/>
                    <div>
                        <h1 className="text-white font-bold text-2xl">Susie Gaster Silva</h1>
                        <h2 className="text-pink-300 font-bold bg-yellow-100 border rounded-xl pr-1 pl-1 md:text-center"> Lvl 1225 | O Maioral </h2>
                    </div>
                    <div className="absolute inset-y--1 right-5">
                        <button type="button" className="text-white font-bold border rounded-xl bg-pink-300 cursor-pointer pl-2 pr-2 mr-2 transition ease-in-out duration-300 hover:scale-105"> 👥 Adicionar </button>
                        <button type="button" className="text-white font-bold border rounded-xl bg-pink-200 cursor-pointer pl-2 pr-2 transition ease-in-out duration-300 hover:scale-105"> 💬 Mensagem </button>
                    </div>

                </div>
                <div>
                    <h1 className="justify-self-center text-white font-bold text-2xl p-2">JOGOS E EXPERIÊNCIAS</h1>
                </div>
                {/* CARDS DE JOGOS */}
                <div className="relative p-4 bg-slate-700 border border-2 rounded-xl border-pink-300 flex flex-row grid grid-cols-3">
                        <div className="w-fit h-fit p-4 transition ease-in-out duration-300 hover:scale-105">
                            <img src="https://m.media-amazon.com/images/M/MV5BY2NkZTAxNTQtNDg0YS00ZDdhLTk4OTgtZWQyMzJmODJlYmVkXkEyXkFqcGc@._V1_.jpg" alt="" className="w-50 h-75 border border-2 border-pink-400 rounded-xl"/>
                            <h1 className="justify-self-center text-slate-500 font-semibold text-xs">HORAS:88h</h1>
                            <h1 className="justify-self-center text-white font-bold text-2xl">PEAK</h1>
                        </div>

                        <div className="w-fit h-fit p-4 transition ease-in-out duration-300 hover:scale-105">
                            <img src="https://assetsio.gnwcdn.com/coaat4.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp" alt="" className="w-50 h-75 border border-2 border-pink-400 rounded-xl"/>
                            <h1 className="justify-self-center text-slate-500 font-semibold text-xs">HORAS:21h</h1>
                            <h1 className="justify-self-center text-white font-bold text-2xl">Deep Rock Galactic</h1>
                        </div>

                        <div className="w-fit h-fit p-4 transition ease-in-out duration-300 hover:scale-105">
                            <img src="https://image.api.playstation.com/vulcan/ap/rnd/202508/2503/d975a2a2d80276d9891d8d3430fb8ec7ed2e4ad807707e76.png" alt="" className="w-50 h-75 border border-2 border-pink-400 rounded-xl"/>
                            <h1 className="justify-self-center text-slate-500 font-semibold text-xs">HORAS:270h</h1>
                            <h1 className="justify-self-center text-white font-bold text-2xl">Hollow Knight: Silksong</h1>
                        </div>

                        <div className="w-fit h-fit p-4 transition ease-in-out duration-300 hover:scale-105">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjU4ODMwYjQtYjQxOC00M2Y3LWE5NDUtMWMwMjgyNjIzMDVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" className="w-50 h-75 border border-2 border-pink-400 rounded-xl"/>
                            <h1 className="justify-self-center text-slate-500 font-semibold text-xs">HORAS:435h</h1>
                            <h1 className="justify-self-center text-white font-bold text-2xl">Detroit: Become Human</h1>
                        </div>

                        <div className="w-fit h-fit p-4 transition ease-in-out duration-300 hover:scale-105">
                            <img src="https://store-images.s-microsoft.com/image/apps.6448.14216942822196343.dfa45b94-960e-4595-b2be-f54c2f268b7a.6ad58563-3523-4690-8e1b-199e66021326" alt="" className="w-50 h-75 border border-2 border-pink-400 rounded-xl"/>
                            <h1 className="justify-self-center text-slate-500 font-semibold text-xs">HORAS:120h</h1>
                            <h1 className="justify-self-center text-white font-bold text-2xl">Undertale</h1>
                        </div>

                        <div className="w-fit h-fit p-4 transition ease-in-out duration-300 hover:scale-105">
                            <img src="https://upload.wikimedia.org/wikipedia/en/8/81/OneShot_cover_art.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="" className="w-50 h-75 border border-2 border-pink-400 rounded-xl"/>
                            <h1 className="justify-self-center text-slate-500 font-semibold text-xs">HORAS:347h</h1>
                            <h1 className="justify-self-center text-white font-bold text-2xl">OneShot</h1>
                        </div>
                </div>
            </div>
        </div>
    )
}