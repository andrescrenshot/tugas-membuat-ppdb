import { useState } from "react";


function Profile() {
  const [showSejarah, setShowSejarah] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center">
        <img
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow-md"
          src="https://i.pinimg.com/736x/07/fb/34/07fb3452c4640d881a16d08c2e314f3e.jpg"
          alt="Profile"
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Ainstein</h2>
        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quam ea! Voluptas quis aliquam asperiores a eveniet iure libero laboriosam nostrum dolor, accusantium est impedit facere voluptatem enim. Iste, quibusdam.</p>
        <p className="mt-3 text-gray-600 text-sm">
          
        </p>

        <div className="flex justify-center mt-4 gap-3">
          <button
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
          Developer
          </button>
          <button
            onClick={() => setShowSejarah(!showSejarah)}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Informasi
          </button>
        </div>

        {showSejarah && (
          <div className="mt-6 text-left bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              <img
              alt=""
              src="https://i.pinimg.com/736x/c7/21/77/c721774092d41df575685f14a939e669.jpg"/>
              nama: Andre Nugroho
              umur: **
              hobby: mancing perkoro
              media social: adrart🤑😜
              Data:seorang Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde magni nisi vero repellendus, voluptate, in dolorum incidunt non rerum cum odit assumenda! Ut assumenda nemo voluptate numquam omnis consectetur.
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
