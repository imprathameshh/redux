PROJECT FLOW

1. Folder Structure:
   Create two folders: components and redux.

2. Redux Setup:
   Inside the redux folder:
   a. Create a cakes folder for cake-related Redux functionality.
   b. Create cakeActions.js to define action creators.
   c. Create cakeConstants.js to store action type constants.
   d. Create cakeReducer.js to define the cake reducer.
   e. Create store.js to set up the Redux store and combine reducers.

3. Action Creators:
   In cakeActions.js, define action creators like buyCake() to dispatch actions.

4. Action Type Constants:
   In cakeConstants.js, define action type constants like BUY_CAKE.
   Reducer:

5. In cakeReducer.js:
   a. Define the initial state.
   b. Create the cake reducer function with parameters state and action.
   c. Use a switch statement to handle different action types and update the state accordingly.

6. Store Configuration:
   In store.js, set up the Redux store using createStore() from Redux and combine reducers if there are multiple reducers.

7. Component Integration:
   In App.js or any other relevant file:
   Wrap your application with the <Provider> component from react-redux to provide the Redux store to your components.

8. Component Creation:
   a. Inside the components folder, create components such as CakeContainer.js to interact with Redux state.
   b. In CakeContainer.js, use hooks like useSelector() to access state and useDispatch() to dispatch actions.
