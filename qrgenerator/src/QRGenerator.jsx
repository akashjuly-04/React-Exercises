import {useState} from "react";
import {QRCodeCanvas} from "qrcode.react";

const QRGenerator=()=>{
    const [text,setText]=useState("")

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="p-6 max-w-sm w-full shadow-lg bg-white rounded-lg">
                <h2 className="text-xl font-semifold mb-4 text-center">QR Generator</h2>

                <input 
                    type="text"
                    placeholder="Enter text or URL"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />
                <div className=" flex justify-center">
                    {text && <QRCodeCanvas value={text} size={200}/>}

                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded" onClick={()=>setText("")}>Clear</button>
                
            </div>

        </div>
    )
}
export default QRGenerator;