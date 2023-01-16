import React, { useState } from 'react';
import './index.css'; // webdeveloper.com

export function BWSwitch() {
    const [on, setOn] = useState(false);
    return (
        <div className={`absolute top-4 right-8 ${on ? 'sun' : 'moon'}`}>
            <div id="sun-moon-container" onClick={() => setOn((v) => !v)}>
                <div id="sun-moon-toggle">
                    <div id="main-circle" className=""></div>
                    <div id="sun-ray-1" className="sun-rays"></div>
                    <div id="sun-ray-2" className="sun-rays"></div>
                    <div id="sun-ray-3" className="sun-rays"></div>
                    <div id="sun-ray-4" className="sun-rays"></div>
                    <div id="sun-ray-5" className="sun-rays"></div>
                    <div id="sun-ray-6" className="sun-rays"></div>
                    <div id="sun-ray-7" className="sun-rays"></div>
                    <div id="sun-ray-8" className="sun-rays"></div>
                </div>
            </div>
        </div>
    );
}
