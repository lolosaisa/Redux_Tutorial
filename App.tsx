
//NOT REAL CODE. PSEUDO CODE AND SHORT NOTES
import Counter from "./components/Counter";
//Redux  is a state manangement  library that helps you manage the state of your application.
//in context of react it means you can have state that is accessible to all components in your application despite where they are on the tree
//Redux has 3 main parts: store, actions, and reducers

//store concept
//store is essentially a state and you can put hatever
//Redux helps you set it up and connect it to your react application
//usually made up of multiple slices - muiltiple slices of the state each responsibe for a different part of the state

interface CounterState {
    value: number;
}
interface Userstate {
    isSignedIn: boolean;
    //user state is a slice of the state as well as counterstate

}

//action
//this is what is used to tell redux what to do with our state

const increment = {type: "increment", payload: 1};
//redux uses the type to determine what to do with the state
//eg. if it receives type increment it will know it need to increment
//payload is optional. it is used to pass data to the redux in our action so that it con perform it's job
const increment = {type: "Decrement", payload: 5};

//reducer
//They are responsible for taking an action and depending on the type of the action they make update on the redux store
//they are pure functions
//reducers never directly make an update tto the store/state
//they make a copy of the state and make the update on the copy and return the copy by overwriding the original state
//redux does not allow us to directly mutate the state. it wont work
const App = () => {
    return (
        <div>
            <h1>Redux full tutorial</h1>
            <Counter />
        </div>
    );
};