//import logo from './logo.svg';
import './Calc.css';

function StdCalc() {
  return (  
    <div className="StdCalc">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Standart CALC
        </p>
        <div buttons ms="4">
            <div>
                <button ms="4">
                    7
                </button>
                <button ms="4">
                    8
                </button>
                <button>
                    9
                </button>
            </div>
            <div>
                <button>
                    4
                </button>
                <button>
                    5
                </button>
                <button>
                    6
                </button>
            </div>
            <div>
                <button>
                    1
                </button>
                <button>
                    2
                </button>
                <button>
                    3
                </button>
            </div>
        </div>
      </header>
    </div>
  );
}

export default StdCalc;