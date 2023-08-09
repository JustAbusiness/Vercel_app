import React, {createContext, useContext} from 'react';


const ColorContext = createContext({
    color: "black",
    backgroundColor: "white"

})

const GrandChildComponent = () => {
    const {color, backgroundColor} = useContext(ColorContext);
    return (
        <div style={{color, backgroundColor}}>
                 <h4>GrandChildComponent</h4>
      <p>This is the GrandChildComponent text.</p>
        </div>
    )
}

const ChildComponent = () => {
    return (
      <div>
        <h3>ChildComponent</h3>
        <GrandChildComponent />
      </div>
    );
  };

const ParentComponent = () => {
    return (
        <div>
            <h3>ParentComponent</h3>
            <ChildComponent></ChildComponent>
        </div>
    )
}
  

const GrandParentComponent = () => {
    return (
      <div>
        <h1>GrandParentComponent</h1>
        {/* <ColorContext.Provider value={{ color: 'blue', backgroundColor: 'lightgray' }}>
          <ParentComponent />
        </ColorContext.Provider> */}

        <ColorContext.Provider value={{ color: 'blue', backgroundColor: "green" }} >
            <ParentComponent></ParentComponent>
         </ColorContext.Provider >
      </div>
    );
  };

const useContext1 = () => {
    return (
        <div className='App'>
             <GrandParentComponent />
        </div>
    );
};

export default useContext1;