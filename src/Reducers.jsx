import { useReducer } from "react";

export default function Reducrs(){

     const initialstate={
        showText:false,
        changeStyle:false

     }
     function reducer(state,action){
        switch (action.type) {
            case Hide_Text:
                return{
                    ...state,
                    showText:false,
                };
                case Show_Text:
                    return{
                        ...state,
                        showText:true,
                    };
                    case Change_text_Style:
                        return{
                            ...state,
                            changeStyle:!state.changeStyle,
                        };
                

        
            default:
                return state;
        }
     }
     const Hide_Text="Hide_Text"
     const Show_Text = "Show_Text"
     const Change_text_Style="Change_text_Style"
    const [state,dispatch] = useReducer(reducer,initialstate)
    return(
        <>
        {
           state?.showText?<h1 style={{backgroundColor:state?.Change_text_Style?'black':'red'}}>This is text</h1>:null
           }
            {/* <h1>The UseReducers</h1> */}
            <button onClick={()=>dispatch({type:Show_Text})}>Show Text</button>
            <button onClick={()=>dispatch({type:Hide_Text})}>Hide Text</button>
            <button onClick={()=>dispatch({type:Change_text_Style})}>Toggle thext</button>
        </>
    )
}