import { useState } from "react"

function Sidnav() {
    const [open, setOpen] = useState(false);

    return (
        
            <div className="bg-red-800">
                <div className={`fixed top-0 h-full w-60 bg-gray-800 text-white
            ${open ? "translate-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out md:translate-x-0`}>

                    <div className="text-xl font-bold mb-8 text-center">Binus</div>

                    <nav className="space-y-3">
                        <a href="/T" className="block py-2 px-3 rounded hover:bg-blue-600">Dasboard Siswa</a>
                        <a href="/D" className="block py-2 px-3 rounded hover:bg-blue-600">Jalur pendaftaran1</a>
                        <a href="/S" className="block py-2 px-3 rounded hover:bg-blue-600">Jalur pendaftaran2</a>
                        <a href="/" className="block py-2 px-3 rounded hover:bg-blue-600">Jalur pendaftaran3</a>
                        <a href="/L" className="block py-2 px-3 rounded hover:bg-blue-600 mt-90">Profile</a>
                    </nav>

                    <div className=""></div>
                </div>
            </div>

        

    )
}


export default Sidnav