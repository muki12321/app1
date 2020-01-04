import React from 'react';
import './Toolbar.css';

const Toolbar = props => (
    <div className = 'root'>
        <header>
           <div className = 'naslov'>
                Document App        
           </div>
           <div className = 'naslovnaTraka'>
                
           </div>
        </header>
        
        <main>
            <div className = 'menu'>
                <div className = 'options' id = 'start'><i class="fas fa-home"></i>Start</div>
                <div className = 'options' id = 'apps'>
                    <i class="fas fa-bars"></i>
                        Web apps
                    <i id = 'down' class="fas fa-angle-down">
                        {document.getElementById("apps").addEventListener("click")}
                    </i>
                    <ul id = 'dropmenu'>
                        <li>React app</li>
                        <li>Dojo app</li>
                    </ul>
                </div>
            </div>
            <div className = 'sadrzaj'>
                Start
            </div>
        </main>
    </div>


);
export default Toolbar;