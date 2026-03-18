import { useState } from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Gallery from "./components/Gallery";
import Video from "./components/Video";


function App() {
    const [step, setStep] = useState(0);

    return (
      <div className="min-h-screen flex items-center justify-center">
        {step === 0 && <Welcome next={()=>setStep(1)}/>}
          {step === 1 && <Quiz next={()=>setStep(2)}/>}
            {step === 2 && <Gallery next={()=>setStep(3)}/>}       
              {step === 3 && <Video/>}

      </div>
    )
}

export default App;
